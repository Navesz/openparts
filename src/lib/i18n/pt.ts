/** Portuguese UI copy for Open Parts alpha. */

export const pt = {
  nav: {
    search: 'Busca',
    catalog: 'Catálogo',
    about: 'Sobre'
  },
  footer:
    'Alpha · fixtures Chevrolet Vectra BR · não é garantia de encaixe',
  search: {
    eyebrow: 'local-first · Vectra alpha',
    title: 'Open Parts',
    lede:
      'Consulte códigos de peças do Chevrolet Vectra e veja candidatos de equivalência com confiança e proveniência explícitas. Este alpha usa SKUs sintéticos de propósito — não inventa números OEM reais.',
    banner:
      'Não é certificado de encaixe. Confira antes de comprar ou instalar. Categorias de segurança começam em do-not-advise neste alpha.',
    codeLabel: 'Código ou texto',
    codePlaceholder: 'ex.: SYN-VB-CABIN-01',
    vehicleLabel: 'Filtro de veículo',
    allVehicles: 'Todos os fixtures Vectra',
    search: 'Buscar',
    demo: 'Demo',
    probeUnknown: 'Testar código desconhecido',
    probeBrake: 'Testar recusa de freio',
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
    lede:
      'Open Parts é um laboratório local-first para explorar equivalência de peças do Chevrolet Vectra com confiança, proveniência e limites de segurança explícitos.',
    isTitle: 'O que este alpha é',
    isItems: [
      'Ferramenta de engenharia e educação com fixtures Vectra BR',
      'Busca determinística sobre um catálogo versionado',
      'Falha honesta para códigos desconhecidos e arestas bloqueadas',
      'Notas .oparts.json locais que não saem do seu aparelho até você exportar'
    ],
    isNotTitle: 'O que este alpha não é',
    isNotItems: [
      'Ordem de serviço ou certificado de encaixe',
      'Substituição de TecDoc / EPC da montadora',
      'Scraper de catálogos proprietários',
      'Cobertura de todos os veículos GM / Chevrolet'
    ],
    safetyTitle: 'Segurança',
    safetyBody:
      'Leia docs/SAFETY.md no repositório. Freio, direção, airbag e categorias semelhantes começam em do-not-advise, salvo evidência curada.',
    contributeTitle: 'Contribuir',
    contributeBody: 'Docs em inglês e UI em português neste alpha. Comece em'
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
