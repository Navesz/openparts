# Open Parts ? HANDOFF (compact memory)

```yaml
auto_continue: false
project: Open Parts
repo_dir: C:\Users\leona\OneDrive\Desktop\PROJETO
github: https://github.com/Navesz/openparts
demo: https://navesz.github.io/openparts/
stack: SvelteKit + TypeScript + Vitest + npm
alpha_scope: Chevrolet Vectra BR only
```

## Hard rules
- No invented OEM numbers; SYN-* only for demo
- do-not-advise for safety-critical defaults
- Commit each slice; git author via env only

## Done (alpha complete)
- Full runnable app: Search, Catalog, About
- Engine + schemas + synthetic fixtures + tests (6)
- Local `.oparts.json` import/export
- Public repo + milestone issues + gh-pages demo
- Continuity hooks remain available; auto_continue off after alpha ship

## Next (optional expansions)
1. Grant `workflow` OAuth scope and move `docs/github/ci.yml.example` ? `.github/workflows/ci.yml`
2. Curate real Vectra equivalences with provenance (still no scraping of proprietary EPC)
3. Portuguese UI strings after English alpha hardens
4. Broader Chevrolet platforms only after Vectra evidence quality is solid

## Resume
If expanding: set `auto_continue: true` and pick the first optional item.
Never invent OEM numbers.
