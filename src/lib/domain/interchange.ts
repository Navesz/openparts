import type {
  CatalogDocument,
  Confidence,
  EquivalenceEdge,
  PartNode,
  SearchHit,
  SearchResult,
  VehicleContext
} from './types';

const CONFIDENCE_RANK: Record<Confidence, number> = {
  curated: 3,
  'community-proposed': 2,
  synthetic: 1,
  'do-not-advise': 0
};

function normalizeCode(code: string): string {
  return code
    .trim()
    .toUpperCase()
    .replace(/[\s\-]/g, '');
}

function safetyWarnings(part: PartNode, confidence: Confidence): string[] {
  const warnings: string[] = [];
  if (part.safetyClass === 'safety-critical') {
    warnings.push('Categoria de segurança: não use este resultado como autorização de instalação.');
  }
  if (confidence === 'synthetic') {
    warnings.push('Dado sintético de demonstração — não é um código OEM real.');
  }
  if (confidence === 'do-not-advise') {
    warnings.push('Equivalência bloqueada pela política de segurança do Open Parts.');
  }
  if (confidence === 'community-proposed') {
    warnings.push('Proposta comunitária aguardando revisão de curadoria.');
  }
  return warnings;
}

function expandEdges(edges: EquivalenceEdge[]): EquivalenceEdge[] {
  const out: EquivalenceEdge[] = [...edges];
  for (const edge of edges) {
    if (!edge.bidirectional) continue;
    out.push({
      ...edge,
      id: `${edge.id}::rev`,
      fromPartId: edge.toPartId,
      toPartId: edge.fromPartId
    });
  }
  return out;
}

export class InterchangeIndex {
  private readonly partsById: Map<string, PartNode>;
  private readonly partsByCode: Map<string, PartNode[]>;
  private readonly vehiclesById: Map<string, VehicleContext>;
  private readonly edgesFrom: Map<string, EquivalenceEdge[]>;

  constructor(private readonly catalog: CatalogDocument) {
    this.vehiclesById = new Map(catalog.vehicles.map((v) => [v.id, v]));
    this.partsById = new Map(catalog.parts.map((p) => [p.id, p]));
    this.partsByCode = new Map();
    for (const part of catalog.parts) {
      const key = normalizeCode(part.code);
      const list = this.partsByCode.get(key) ?? [];
      list.push(part);
      this.partsByCode.set(key, list);
    }
    this.edgesFrom = new Map();
    for (const edge of expandEdges(catalog.equivalences)) {
      const list = this.edgesFrom.get(edge.fromPartId) ?? [];
      list.push(edge);
      this.edgesFrom.set(edge.fromPartId, list);
    }
  }

  getCatalog(): CatalogDocument {
    return this.catalog;
  }

  listVehicles() {
    return this.catalog.vehicles;
  }

  applicationsFor(part: PartNode): VehicleContext[] {
    return part.fitsVehicleIds
      .map((id) => this.vehiclesById.get(id))
      .filter((v): v is VehicleContext => Boolean(v));
  }

  private hit(part: PartNode, fields: Omit<SearchHit, 'part' | 'applications'>): SearchHit {
    return {
      part,
      applications: this.applicationsFor(part),
      ...fields
    };
  }

  search(
    rawQuery: string,
    opts?: { vehicleId?: string; minConfidence?: Confidence }
  ): SearchResult {
    const query = rawQuery.trim();
    const messages: string[] = [];
    if (!query) {
      return {
        query,
        status: 'empty',
        hits: [],
        messages: ['Informe um código ou texto de busca.']
      };
    }

    const minRank = CONFIDENCE_RANK[opts?.minConfidence ?? 'synthetic'];
    const codeKey = normalizeCode(query);
    const direct = this.partsByCode.get(codeKey) ?? [];

    const hits: SearchHit[] = [];

    if (direct.length === 0) {
      const lowered = query.toLowerCase();
      for (const part of this.catalog.parts) {
        if (
          part.label.toLowerCase().includes(lowered) ||
          part.category.toLowerCase().includes(lowered) ||
          part.code.toLowerCase().includes(lowered)
        ) {
          if (opts?.vehicleId && !part.fitsVehicleIds.includes(opts.vehicleId)) continue;
          hits.push(
            this.hit(part, {
              matchedVia: 'exact-code',
              confidence: 'synthetic',
              reason: 'Correspondência parcial por texto no catálogo demo.',
              warnings: safetyWarnings(part, 'synthetic')
            })
          );
        }
      }
      if (hits.length === 0) {
        return {
          query,
          status: 'unknown-code',
          hits: [],
          messages: [
            'Nenhuma peça encontrada neste catálogo alpha. O Open Parts não inventa equivalências. Tente um código SYN-* do demo ou consulte fontes externas (CepChev/TecDoc) e traga a evidência.'
          ]
        };
      }
    } else {
      for (const part of direct) {
        if (opts?.vehicleId && !part.fitsVehicleIds.includes(opts.vehicleId)) {
          messages.push(
            `A peça ${part.code} existe, mas não está ligada ao filtro de veículo selecionado.`
          );
          continue;
        }
        hits.push(
          this.hit(part, {
            matchedVia: 'exact-code',
            confidence: part.code.startsWith('SYN-') ? 'synthetic' : 'curated',
            reason: 'Código encontrado diretamente no catálogo carregado.',
            warnings: safetyWarnings(part, part.code.startsWith('SYN-') ? 'synthetic' : 'curated'),
            provenance: {
              kind: part.code.startsWith('SYN-') ? 'synthetic-demo' : 'curator-note',
              summary: part.code.startsWith('SYN-')
                ? 'SKU sintético do fixture GM Brasil alpha'
                : 'Carregado do documento de catálogo ativo'
            }
          })
        );

        const edges = this.edgesFrom.get(part.id) ?? [];
        for (const edge of edges) {
          const other = this.partsById.get(edge.toPartId);
          if (!other) continue;
          if (opts?.vehicleId && !other.fitsVehicleIds.includes(opts.vehicleId)) continue;

          if (edge.confidence === 'do-not-advise') {
            hits.push(
              this.hit(other, {
                relatedPart: part,
                matchedVia: 'equivalence',
                confidence: 'do-not-advise',
                reason: edge.reason,
                warnings: safetyWarnings(other, 'do-not-advise'),
                provenance: edge.provenance
              })
            );
            continue;
          }

          if (CONFIDENCE_RANK[edge.confidence] < minRank) continue;

          hits.push(
            this.hit(other, {
              relatedPart: part,
              matchedVia: 'equivalence',
              confidence: edge.confidence,
              reason: edge.reason,
              warnings: safetyWarnings(other, edge.confidence),
              provenance: edge.provenance
            })
          );
        }
      }
    }

    const blockedOnly = hits.length > 0 && hits.every((h) => h.confidence === 'do-not-advise');

    return {
      query,
      status: blockedOnly ? 'blocked' : hits.length ? 'ok' : 'unknown-code',
      hits,
      messages
    };
  }
}
