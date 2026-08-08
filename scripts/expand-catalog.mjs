import { readFileSync, writeFileSync } from 'node:fs';

const doc = JSON.parse(readFileSync('data/fixtures/vectra/alpha.catalog.json', 'utf8'));
doc.name = 'gm-br-vectra-family-synthetic';
doc.description =
  'Catalogo sintetico focado em Vectra + narrativas de plataforma GM Brasil (Familia I/II). Codigos NAO sao OEM reais. Use CepChev/TecDoc/Nakata para batida profissional.';

const pub = (summary, url) => ({
  kind: 'public-article',
  summary,
  url,
  accessed: '2026-08-09'
});
const syn = (summary) => ({
  kind: 'synthetic-demo',
  summary,
  accessed: '2026-08-09'
});

const extraVehicles = [
  {
    id: 'astra-g-br',
    make: 'Chevrolet',
    model: 'Astra',
    generation: 'G',
    market: 'BR',
    years: '1998-2011',
    platformFamily: 'Familia II / Opel Astra',
    notes:
      'Contemporaneo do Vectra no Brasil; fontes publicas citam compartilhamento de componentes com Vectra/Zafira em varias areas.',
    relatedPlatformNotes: [
      'Nao trate compartilhamento de plataforma como equivalencia SKU automatica.'
    ],
    sources: [
      pub(
        'Historia publica GM/Opel no Brasil',
        'https://motor1.uol.com.br/features/777248/historia-ultimo-chevrolet-vectra-brasil/'
      )
    ]
  },
  {
    id: 'zafira-a-br',
    make: 'Chevrolet',
    model: 'Zafira',
    generation: 'A',
    market: 'BR',
    years: '2001-2012',
    platformFamily: 'Familia II / Zafira',
    notes: 'Minivan citada em reportagens como base relacionada ao Novo Vectra brasileiro.',
    relatedPlatformNotes: [
      'Relacao de plataforma e narrativa historica, nao prova de pastilha/filtro identicos.'
    ],
    sources: [
      pub(
        'Vectra III e plataforma Zafira no Brasil',
        'https://pt.wikipedia.org/wiki/Chevrolet_Vectra'
      )
    ]
  },
  {
    id: 'monza-br',
    make: 'Chevrolet',
    model: 'Monza',
    generation: 'final',
    market: 'BR',
    years: '1991-1996',
    platformFamily: 'Familia II (antecessor)',
    notes:
      'Antecessor historico do Vectra no Brasil; motores Family II sao amplamente citados na linhagem.',
    relatedPlatformNotes: ['Geracao e injecao (EFI/MPFI) mudam pecas mesmo com motor 2.0 no nome.'],
    sources: [
      pub(
        'Contexto Monza/Vectra',
        'https://autovideos.com.br/verdades-surpreendentes-monza-e-vectra/'
      )
    ]
  },
  {
    id: 'corsa-b-br',
    make: 'Chevrolet',
    model: 'Corsa',
    generation: 'B',
    market: 'BR',
    years: '1994-2002',
    platformFamily: 'Familia I',
    notes:
      'Entrada da Familia I no Brasil; Celta/Prisma/Meriva/Montana antiga compartilham muitos itens segundo literatura de oficina — aqui so narrativa.',
    relatedPlatformNotes: [
      'Celta/Prisma/Corsa: confirme codigo gravado e ano/versao; geracoes mudam radicalmente.'
    ],
    sources: [syn('Narrativa educacional Familia I — sem OEM inventado')]
  },
  {
    id: 'celta-br',
    make: 'Chevrolet',
    model: 'Celta',
    generation: '1',
    market: 'BR',
    years: '2000-2015',
    platformFamily: 'Familia I',
    notes: 'Derivado da familia Corsa no Brasil.',
    relatedPlatformNotes: [
      'Use codigo OEM + catalogo aftermarket (Nakata/TecDoc) para batida real.'
    ],
    sources: [syn('Narrativa educacional Familia I')]
  },
  {
    id: 'prisma-br',
    make: 'Chevrolet',
    model: 'Prisma',
    generation: '1',
    market: 'BR',
    years: '2006-2012',
    platformFamily: 'Familia I',
    notes: 'Sedan da familia Celta/Corsa.',
    relatedPlatformNotes: ['Mesmo nome em geracoes diferentes nao implica mesma peca.'],
    sources: [syn('Narrativa educacional Familia I')]
  },
  {
    id: 'meriva-br',
    make: 'Chevrolet',
    model: 'Meriva',
    generation: 'A',
    market: 'BR',
    years: '2003-2012',
    platformFamily: 'Familia I / Opel',
    notes:
      'Citada junto a Astra/Vectra em compartilhamento de acabamentos internos em algumas reportagens.',
    relatedPlatformNotes: ['Difusores/botoes != equivalencia de freio ou sensor.'],
    sources: [
      pub(
        'Vectra e componentes compartilhados',
        'https://motor1.uol.com.br/features/777248/historia-ultimo-chevrolet-vectra-brasil/'
      )
    ]
  }
];

const have = new Set(doc.vehicles.map((v) => v.id));
for (const v of extraVehicles) {
  if (!have.has(v.id)) doc.vehicles.push(v);
}

for (const v of doc.vehicles) {
  if (v.id === 'vectra-b-br') v.platformFamily = 'Familia II / Opel Vectra B';
  if (v.id === 'vectra-c-br') v.platformFamily = 'Familia II / Astra-Zafira (BR)';
}

const family2 = ['vectra-b-br', 'vectra-c-br', 'astra-g-br', 'zafira-a-br', 'monza-br'];
const family1 = ['corsa-b-br', 'celta-br', 'prisma-br', 'meriva-br'];

function upsertPart(part) {
  const i = doc.parts.findIndex((p) => p.id === part.id);
  if (i >= 0) doc.parts[i] = { ...doc.parts[i], ...part };
  else doc.parts.push(part);
}

upsertPart({
  id: 'syn-oil-filter-shared',
  code: 'SYN-FAMILY2-OIL-01',
  brand: 'Open Parts Demo',
  label: 'Filtro de oleo (demo Familia II)',
  category: 'filter',
  safetyClass: 'wear-item',
  fitsVehicleIds: family2,
  notes: 'Demo educacional Family II — NAO e OEM.'
});
upsertPart({
  id: 'syn-spark-family2',
  code: 'SYN-FAMILY2-SPARK-01',
  brand: 'Open Parts Demo',
  label: 'Jogo de velas (demo Familia II)',
  category: 'ignition',
  safetyClass: 'wear-item',
  fitsVehicleIds: family2,
  notes: 'Demo: confirme grau termico no veiculo real.'
});
upsertPart({
  id: 'syn-thermo-family1',
  code: 'SYN-FAMILY1-THERMO-01',
  brand: 'Open Parts Demo',
  label: 'Valvula termostatica (demo Familia I)',
  category: 'cooling',
  safetyClass: 'wear-item',
  fitsVehicleIds: family1,
  notes: 'Demo Corsa/Celta/Prisma/Meriva.'
});
upsertPart({
  id: 'syn-coil-family1',
  code: 'SYN-FAMILY1-COIL-01',
  brand: 'Open Parts Demo',
  label: 'Bobina de ignicao (demo Familia I)',
  category: 'ignition',
  safetyClass: 'wear-item',
  fitsVehicleIds: family1,
  notes: 'EFI vs MPFI mudam pecas — SKU so demo.'
});
upsertPart({
  id: 'syn-bulb-h4',
  code: 'SYN-SHARED-BULB-H4',
  brand: 'Open Parts Demo',
  label: 'Lampada H4 (demo compartilhada)',
  category: 'electrical',
  safetyClass: 'wear-item',
  fitsVehicleIds: [...family1, ...family2],
  notes: 'Item de consumo generico de demo.'
});

if (!doc.equivalences.find((e) => e.id === 'eq-family2-oil-spark-propose')) {
  doc.equivalences.push({
    id: 'eq-family2-oil-spark-propose',
    fromPartId: 'syn-oil-filter-shared',
    toPartId: 'syn-spark-family2',
    confidence: 'community-proposed',
    reason: 'Proposta ficticia so para UI: mesma familia de motor NAO implica filtro=vela.',
    bidirectional: false,
    provenance: syn('Exemplo educacional de community-proposed')
  });
}

writeFileSync('data/fixtures/vectra/alpha.catalog.json', `${JSON.stringify(doc, null, 2)}\n`);
console.log(
  'vehicles',
  doc.vehicles.length,
  'parts',
  doc.parts.length,
  'edges',
  doc.equivalences.length
);
