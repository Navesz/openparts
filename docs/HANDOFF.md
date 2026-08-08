# Open Parts — HANDOFF (compact memory)

> **Agents: read this first on every new/compacted session.**
> Keep this file under ~80 lines. Update it after every meaningful slice, then commit.

```yaml
auto_continue: true
project: Open Parts
repo_dir: C:\Users\leona\OneDrive\Desktop\PROJETO
github_target: Navesz/openparts (creating next)
stack: SvelteKit + TypeScript + Vitest + npm
language: English first
alpha_scope: Chevrolet Vectra BR only
dev_server: http://127.0.0.1:5173/
```

## Hard rules (never drop)

- Do NOT invent OEM/aftermarket part numbers or fitment claims.
- Synthetic fixture codes must stay `SYN-*` and labeled `synthetic`.
- Safety-critical categories default to `do-not-advise`.
- Commit incrementally after each slice.
- Consult OpenKartLine only for governance tone — not tech stack.
- Git author via env only; do not edit git config.

## Done so far

- Governance docs, domain engine, synthetic Vectra fixture, tests green (6)
- Runnable UI with confidence badges + `.oparts.json` import/export
- CI workflow + Issue/PR templates + CHANGELOG
- Continuity hooks; `auto_continue: true`
- Dev server intended at http://127.0.0.1:5173/

## Next actions (ordered)

1. Create public GitHub repo `openparts`, push `main`, open milestone issues
2. Enable Pages from Actions/artifact or static `build`
3. Mark OBJECTIVES O1–O7 with evidence; tighten README quick start to npm
4. Keep polishing alpha until strong, then set `auto_continue: false` only when done

## Blockers

- npm only (pnpm EPERM)
- Git identity via env vars

## Resume prompt

```text
Continue Open Parts from docs/HANDOFF.md. Commit each slice. Never invent OEM numbers.
```
