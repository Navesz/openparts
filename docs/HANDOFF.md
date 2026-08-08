# Open Parts — HANDOFF (compact memory)

> **Agents: read this first on every new/compacted session.**
> Keep this file under ~80 lines. Update it after every meaningful slice, then commit.

```yaml
auto_continue: true
project: Open Parts
repo_dir: C:\Users\leona\OneDrive\Desktop\PROJETO
github_target: Navesz/openparts (not created yet)
stack: SvelteKit + TypeScript + Vitest + npm (NOT OpenKartLine stack)
language: English first
alpha_scope: Chevrolet Vectra BR only
```

## Hard rules (never drop)

- Do NOT invent OEM/aftermarket part numbers or fitment claims.
- Synthetic fixture codes must stay `SYN-*` and labeled `synthetic`.
- Safety-critical categories default to `do-not-advise`.
- Commit incrementally after each slice (user requested frequent commits).
- Consult OpenKartLine only for governance/README/CoC/PR/license tone — not tech stack.
- Git author via env (`Naves` / `58537948+Navesz@users.noreply.github.com`); do not edit git config.

## Done so far

- OSS governance docs + AGENTS + OBJECTIVES + SAFETY/VALIDATION
- Domain engine: `src/lib/domain/{types,interchange,catalog}.ts` + tests
- Synthetic Vectra fixture: `data/fixtures/vectra/alpha.catalog.json`
- Early SvelteKit UI draft: `src/routes/+page.svelte`, `app.css`, `app.html`
- Commits: `52cba46` bootstrap, `7b72f43` fixtures/tests, `9d7e2bc` rename to Open Parts

## Next actions (ordered)

1. Finish npm install + make `npm run test:run` and `npm run build` pass
2. Polish runnable search UI (confidence badges, unknown-code honesty)
3. Add `.github` Issue/PR templates + CI workflow
4. Create public GitHub repo `openparts`, open milestone issues, push
5. GitHub Pages demo when build is green
6. Update `docs/VALIDATION_REPORT.md` with measured commands
7. Mark objectives O1–O7 in `docs/OBJECTIVES.md` as done with evidence

## Blockers

- `pnpm`/corepack EPERM on this machine → use **npm**
- Git identity missing in config → use env vars per commit only

## Resume prompt (paste if hooks fail)

```text
Continue Open Parts from docs/HANDOFF.md and docs/OBJECTIVES.md.
Do not ask for permission. Commit after each slice. Never invent OEM numbers.
Pick the first incomplete next action and execute until alpha is strong or credits end.
```
