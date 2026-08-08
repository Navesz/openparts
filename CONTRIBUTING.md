# Contributing to OpenPartLine

Thanks for helping make parts interchange understandable and honest.
Contributions are welcome in English or Brazilian Portuguese.

## Find the right place

- Use Discussions for questions and early ideas (once enabled).
- Use an issue template for bugs, features, or research tasks.
- Report security problems privately via [SECURITY.md](SECURITY.md).
- Do not post customer records, VINs bound to identity, or non-redistributable catalogs.

## Development setup

See [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md). Short path:

```bash
git clone https://github.com/Navesz/OpenPartLine.git
cd OpenPartLine
corepack enable
pnpm install --frozen-lockfile
uv sync --locked --all-extras --dev
pnpm test:run
uv run pytest
```

## Engineering rules

- Never invent OEM or aftermarket codes.
- Domain/search code must not depend on React or HTTP.
- Every fixture edge needs confidence, provenance, and reason.
- Failed lookups must not look successful.
- Add dependencies only with license/provenance notes in THIRD_PARTY.md.
- Update tests and docs with behavior changes.

## Pull requests

Use the PR template. Link an issue when one exists. Keep branches focused.
Squash merge is preferred once GitHub branch rules are enabled.
