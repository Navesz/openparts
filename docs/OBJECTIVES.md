# Open Parts — session and delivery objectives

This file is the **authoritative objective register** for agents and humans.
Work top-down. Do not invent OEM part numbers. Do not mark a milestone done
without the exit evidence listed here and in [ROADMAP.md](ROADMAP.md).

## Anti-hallucination rules (always)

1. Never invent Chevrolet/Opel OEM numbers, aftermarket codes, or fitment claims.
2. Every equivalence row needs `confidence`, `provenance`, and a human-readable `reason`.
3. Synthetic demo fixtures must be labeled `synthetic` and must not look like real OEM data.
4. Safety-critical categories (brakes, steering, airbag, suspension hard points) default to
   `do-not-advise` unless the source is explicitly curated and reviewed.
5. UI must never present `unknown` or failed lookup as a successful match.
6. Prefer “insufficient evidence” over a plausible-looking answer.

## Objective board

| ID | Status | Objective | Exit evidence |
|---|---|---|---|
| O1 | in_progress | OSS foundation mirroring OpenKartLine governance | Files present: LICENSE, CoC, CONTRIBUTING, SECURITY, GOVERNANCE, SUPPORT, README EN/PT |
| O2 | pending | Reproducible SvelteKit + TypeScript app | `pnpm check` and `pnpm test:run` documented and passing locally |
| O3 | pending | Versioned interchange schema + Vectra seed with provenance | Schema + fixtures validate; no unlabeled “real” OEM inventions |
| O4 | pending | Deterministic search engine (TS + Python parity path) | Unit tests for match / no-match / confidence filtering |
| O5 | pending | Runnable browser alpha | Search UI, confidence labels, local JSON import/export |
| O6 | pending | GitHub project hygiene | Public repo, Issues `[M0]…`, PR/Issue templates, CI, Pages demo when ready |
| O7 | pending | Safety & validation docs | SAFETY, VALIDATION, VALIDATION_REPORT with measured commands |

## Agent continuation contract

When this chat or a later agent resumes Open Parts:

1. Read this file and [ROADMAP.md](ROADMAP.md).
2. Pick the first objective that is not `done`.
3. Implement the smallest slice that advances exit evidence.
4. Update the status table in this file.
5. Open or close the matching GitHub issue when the remote repo exists.
6. Stop only when all objectives are `done` or the user interrupts.

There is **no** magic credit variable inside Cursor. Persistence = this file +
GitHub Issues + `.cursor/rules` + `AGENTS.md`. Keep executing objectives in order
for as long as the session allows.
