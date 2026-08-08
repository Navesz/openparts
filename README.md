# OpenPartLine

> Open-source, local-first Chevrolet Vectra parts interchange lab.

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-alpha-orange)](docs/ROADMAP.md)

[Leia em português](README.pt-BR.md) · [Roadmap](docs/ROADMAP.md) · [Objectives](docs/OBJECTIVES.md) · [Contribute](CONTRIBUTING.md)

OpenPartLine helps you explore whether a part code for one Vectra context may relate
to another — with **explicit confidence, provenance, and safety limits**.
It is an engineering and learning tool, not a fitment guarantee and not a shop
work order.

## What works in the runnable alpha (target)

- Search demo fixtures by part code or vehicle generation
- Inspect equivalence reasons and confidence badges
- Refuse silent success on unknown codes
- Save/reopen local `.opk.json` notes
- Run entirely in the browser with a deterministic fallback; optional local Python API later

## Non-goals (alpha)

- All GM/Chevrolet vehicles
- Scraping proprietary catalogs
- Price scraping / auto-checkout
- “Guaranteed fit” claims

## Quick start

```bash
git clone https://github.com/Navesz/OpenPartLine.git
cd OpenPartLine
corepack enable
pnpm install
uv sync --all-extras --dev
pnpm dev
```

In another terminal (optional API):

```bash
uv run OpenPartLine-api
```

## Repository map

| Layer | Role |
|---|---|
| `apps/web` | Search UI + browser engine fallback |
| `engine` | Deterministic interchange graph |
| `services/api` | Thin local FastAPI boundary |
| `packages/schemas` | Versioned JSON Schemas |
| `data/fixtures` | Vectra fixtures with provenance |
| `docs` | Product, safety, validation, objectives |

## Safety and honesty

Read [Safety](docs/SAFETY.md), [Validation](docs/VALIDATION.md), and [Privacy](docs/PRIVACY.md).
Agents and humans must follow [AGENTS.md](AGENTS.md) and [docs/OBJECTIVES.md](docs/OBJECTIVES.md):
**never invent OEM numbers**.

## License

[Apache-2.0](LICENSE)
