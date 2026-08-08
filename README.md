# Open Parts

> Open-source, local-first Chevrolet Vectra parts interchange lab.

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-alpha-orange)](docs/ROADMAP.md)

[Live demo](https://navesz.github.io/openparts/) · [Leia em português](README.pt-BR.md) · [Roadmap](docs/ROADMAP.md) · [Objectives](docs/OBJECTIVES.md) · [Contribute](CONTRIBUTING.md)

Open Parts helps you explore whether a part code for one Vectra context may relate
to another — with **explicit confidence, provenance, and safety limits**.
It is an engineering and learning tool, not a fitment guarantee and not a shop
work order.

## What works in the runnable alpha

- Search synthetic Vectra fixtures by part code or text
- Confidence badges, provenance, and blocked/unknown honesty
- Catalog and About pages
- Save/reopen local `.oparts.json` notes
- Static build for GitHub Pages

## Quick start

```bash
git clone https://github.com/Navesz/openparts.git
cd openparts
npm install
npm run dev
```

Open `http://localhost:5173`.

```bash
npm run test:run
npm run build
```

For the Pages build with the `/openparts` base path:

```bash
# Windows PowerShell
$env:BASE_PATH="/openparts"; npm run build
```

## Repository map

| Layer              | Role                                             |
| ------------------ | ------------------------------------------------ |
| `src/lib/domain`   | Framework-free interchange engine                |
| `src/routes`       | Busca, Catálogo, Plataformas, Fontes, Sobre      |
| `data/fixtures`    | Vectra fixtures with provenance                  |
| `packages/schemas` | JSON Schema for catalog + `.oparts.json`         |
| `docs`             | Product, safety, validation, objectives, handoff |

## Safety and honesty

Read [Safety](docs/SAFETY.md), [Validation](docs/VALIDATION.md), and [Privacy](docs/PRIVACY.md).
**Never invent OEM numbers.**

## License

[Apache-2.0](LICENSE)
