# Development

## Requirements

- Node.js 22+ (Corepack/pnpm via `packageManager`)
- Python 3.11–3.13
- [uv](https://docs.astral.sh/uv/)

## Setup

```bash
corepack enable
pnpm install
uv sync --all-extras --dev
```

## Common commands

```bash
pnpm dev
pnpm check
pnpm test:run
uv run pytest
uv run ruff check .
uv run mypy engine services
```

## Layout

```text
apps/web/           React + Vite search UI and browser fallback
engine/             Framework-free Python interchange engine
services/api/       Optional local FastAPI boundary
packages/schemas/   JSON Schema for fixtures and .opk.json
data/fixtures/      Vectra fixtures with provenance
tests/python/       Engine/API tests
docs/               Product, safety, validation, roadmap, objectives
```

Windows, macOS, and Linux should use the same commands.
