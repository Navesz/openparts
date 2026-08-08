# Development

## Requirements

- Node.js 22+
- pnpm via Corepack (`packageManager` field)

## Setup

```bash
corepack enable
pnpm install
```

## Common commands

```bash
pnpm dev
pnpm check
pnpm test:run
pnpm build
```

## Layout

```text
src/lib/domain/    Framework-free interchange engine + tests
src/lib/data/      Catalog loaders
src/routes/        SvelteKit UI
data/fixtures/     Vectra fixtures with provenance
docs/              Product, safety, validation, roadmap, objectives
```

Stack is intentionally **not** a copy of OpenKartLine (no Python/FastAPI monorepo).
Consult OpenKartLine for governance tone, evidence rules, and community files only.
