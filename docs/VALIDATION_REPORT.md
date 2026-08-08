# Validation report

Status: **alpha measured**

| Check            | Command                                      | Result                 | Date       |
| ---------------- | -------------------------------------------- | ---------------------- | ---------- |
| Unit tests       | `npm run test:run`                           | 6 passed               | 2026-08-08 |
| Typecheck        | `npm run typecheck`                          | 0 errors               | 2026-08-08 |
| Production build | `npm run build`                              | `build/` OK            | 2026-08-08 |
| Pages build      | `$env:BASE_PATH="/openparts"; npm run build` | deployed to `gh-pages` | 2026-08-08 |
| Live demo        | https://navesz.github.io/openparts/          | enabled                | 2026-08-08 |

No fitment accuracy claim is authorized by this report. Demo codes are synthetic (`SYN-*`).
