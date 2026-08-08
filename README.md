# Open Parts

> Open-source, local-first Chevrolet Vectra parts interchange lab.

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-alpha-orange)](docs/ROADMAP.md)

[Leia em português](README.pt-BR.md) · [Roadmap](docs/ROADMAP.md) · [Objectives](docs/OBJECTIVES.md) · [Contribute](CONTRIBUTING.md) · [Naming](docs/NAMING.md)

Open Parts helps you explore whether a part code for one Vectra context may relate
to another — with **explicit confidence, provenance, and safety limits**.
It is an engineering and learning tool, not a fitment guarantee and not a shop
work order.

## What works in the runnable alpha (target)

- Search demo fixtures by part code or vehicle generation
- Inspect equivalence reasons and confidence badges
- Refuse silent success on unknown codes
- Save/reopen local `.oparts.json` notes
- Run entirely in the browser (SvelteKit static build)

## Non-goals (alpha)

- All GM/Chevrolet vehicles
- Scraping proprietary catalogs into the repository
- Price scraping / auto-checkout
- “Guaranteed fit” claims

## Quick start

```bash
git clone https://github.com/Navesz/openparts.git
cd openparts
npm install\nnpm run dev
```

## Repository map

| Layer | Role |
|---|---|
| `src/lib/domain` | Framework-free interchange engine |
| `src/routes` | SvelteKit search UI |
| `data/fixtures` | Vectra fixtures with provenance |
| `docs` | Product, safety, validation, objectives |

Governance patterns follow the spirit of OpenKartLine; the **stack does not**.

## Safety and honesty

Read [Safety](docs/SAFETY.md), [Validation](docs/VALIDATION.md), and [Privacy](docs/PRIVACY.md).
Agents and humans must follow [AGENTS.md](AGENTS.md) and [docs/OBJECTIVES.md](docs/OBJECTIVES.md):
**never invent OEM numbers**.

## License

[Apache-2.0](LICENSE)
