/** Portuguese UI copy for Open Parts alpha. */

export const pt = {
  nav: {
    search: 'Busca',
    catalog: 'Catálogo',
    about: 'Sobre',
    platforms: 'Plataformas',
    sources: 'Fontes'
  },
  footer: 'Alpha · cross-reference educacional GM Brasil · não é garantia de encaixe',
  search: {
    eyebrow: 'local-first · batida de peças · GM Brasil',
    title: 'Open Parts',
    lede: 'Pesquise um código e veja aplicações e equivalentes com confiança e proveniência. O alpha usa SKUs sintéticos (SYN-*) — não inventa OEM. Para batida profissional, combine com CepChev/TecDoc/Nakata.',
    banner:
      'Não é certificado de encaixe nem catálogo GM oficial. Confira o código gravado, ano/versão e injeção (EFI/MPFI) antes de comprar.',
    codeLabel: 'Código ou texto',
    codePlaceholder: 'ex.: SYN-FAMILY2-OIL-01',
    vehicleLabel: 'Filtro de veículo',
    allVehicles: 'Todos os fixtures do catálogo',
    search: 'Buscar',
    demo: 'Demo Vectra',
    probeUnknown: 'Testar código desconhecido',
    probeBrake: 'Testar recusa de freio',
    tryFamily2: 'Demo Família II (óleo)',
    tryFamily1: 'Demo Família I (termostato)',
    saveProject: 'Salvar .oparts.json',
    loadProject: 'Carregar .oparts.json',
    notesLabel: 'Notas locais (só no seu .oparts.json)',
    notesPlaceholder: 'Notas opcionais ficam no seu computador',
    status: 'Status',
    noMatchTitle: 'Sem correspondência',
    noMatchBody:
      'O Open Parts se recusa a inventar equivalência quando o catálogo não tem evidência.',
    blockedTitle: 'Orientação bloqueada',
    blockedBody:
      'Todas as arestas relacionadas estão em do-not-advise. Leia os avisos abaixo; não trate isso como recomendação de substituição.',
    why: 'Por quê',
    relatedTo: 'Relacionado a',
    provenance: 'Proveniência',
    source: 'fonte',
    applications: 'Aplicações neste catálogo',
    vehiclesHeading: 'Veículos do fixture',
    downloaded: 'Arquivo .oparts.json baixado.',
    loadedAt: 'Projeto carregado em',
    importFail: 'Falha ao importar o projeto'
  },
  catalog: {
    title: 'Catálogo',
    parts: 'Peças',
    equivalences: 'Equivalências',
    vehicles: 'Veículos',
    code: 'Código',
    label: 'Nome',
    category: 'Categoria',
    safety: 'Segurança',
    from: 'De',
    to: 'Para',
    confidence: 'Confiança',
    reason: 'Motivo'
  },
  about: {
    title: 'Sobre',
    lede: 'Open Parts é um laboratório local-first de cross-reference (intercambiabilidade) para Chevrolet/GM no Brasil, começando pelo Vectra e famílias de plataforma.',
    isTitle: 'O que este alpha é',
    isItems: [
      'Busca código → aplicações em vários veículos do fixture',
      'Equivalências com confiança e proveniência explícitas',
      'Educação sobre Família I / Família II / compartilhamento de plataforma',
      'Links para ferramentas profissionais externas (sem scrapear catálogos)'
    ],
    isNotTitle: 'O que este alpha não é',
    isNotItems: [
      'CepChev, TecDoc, EPC GM ou loja de peças',
      'Garantia de que a peça “serve” no seu carro',
      'Dump de dados proprietários',
      'Cobertura completa de todos os GM'
    ],
    safetyTitle: 'Segurança',
    safetyBody:
      'Leia docs/SAFETY.md. Freio, direção e airbag começam em do-not-advise sem evidência curada.',
    contributeTitle: 'Contribuir',
    contributeBody: 'UI em português. Comece em'
  },
  categories: {
    filter: 'Filtro',
    brakes: 'Freios',
    ignition: 'Ignição',
    electrical: 'Elétrica',
    cooling: 'Arrefecimento',
    body: 'Carroceria',
    wipers: 'Limpadores',
    belt: 'Correias',
    sensor: 'Sensor'
  }
} as const;

export type UiCopy = typeof pt;
