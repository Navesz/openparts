import { InterchangeIndex } from './interchange';
import type { CatalogDocument, SearchResult } from './types';

export function assertCatalog(doc: CatalogDocument): void {
  if (doc.schemaVersion !== 1) {
    throw new Error(`Unsupported schemaVersion: ${doc.schemaVersion}`);
  }
  const partIds = new Set(doc.parts.map((p) => p.id));
  const vehicleIds = new Set(doc.vehicles.map((v) => v.id));
  for (const part of doc.parts) {
    for (const vid of part.fitsVehicleIds) {
      if (!vehicleIds.has(vid)) {
        throw new Error(`Part ${part.id} references unknown vehicle ${vid}`);
      }
    }
  }
  for (const edge of doc.equivalences) {
    if (!partIds.has(edge.fromPartId) || !partIds.has(edge.toPartId)) {
      throw new Error(`Edge ${edge.id} references unknown parts`);
    }
    if (!edge.reason.trim()) {
      throw new Error(`Edge ${edge.id} missing reason`);
    }
    if (!edge.provenance?.summary?.trim()) {
      throw new Error(`Edge ${edge.id} missing provenance`);
    }
  }
}

export function loadIndex(doc: CatalogDocument): InterchangeIndex {
  assertCatalog(doc);
  return new InterchangeIndex(doc);
}

export function searchCatalog(
  doc: CatalogDocument,
  query: string,
  opts?: { vehicleId?: string }
): SearchResult {
  return loadIndex(doc).search(query, opts);
}
