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
- Domain engine + synthetic Vectra fixture + tests green
- SvelteKit UI draft; `npm install` / typecheck / `npm run build` succeed
- Continuity hooks + HANDOFF
- Commits through safety-filter fix
## Next actions (ordered)

1. Polish runnable search UI and `.oparts.json` import/export
2. Add `.github` Issue/PR templates + CI workflow
3. Create public GitHub repo `openparts`, open milestone issues, push
4. GitHub Pages demo when CI is green
5. Update `docs/VALIDATION_REPORT.md` with measured commands
6. Mark objectives O1-O7 done with evidence
## Blockers

- `pnpm`/corepack EPERM on this machine → use **npm**
- Git identity missing in config → use env vars per commit only

## Resume prompt (paste if hooks fail)

```text
Continue Open Parts from docs/HANDOFF.md and docs/OBJECTIVES.md.
Do not ask for permission. Commit after each slice. Never invent OEM numbers.
Pick the first incomplete next action and execute until alpha is strong or credits end.
```
