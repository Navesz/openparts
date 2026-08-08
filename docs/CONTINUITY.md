# Continuity system (retroactive memory)

Open Parts uses a small continuity pack so agents can keep building after
context compaction or a new chat, without needing the full conversation.

## Files

| File | Role |
|---|---|
| `docs/HANDOFF.md` | Compact working memory (source of truth for “what next”) |
| `docs/OBJECTIVES.md` | Milestone board |
| `AGENTS.md` | Standing engineering rules |
| `.cursor/hooks.json` | Auto inject / auto continue |

## Hooks

- **sessionStart** — injects `HANDOFF.md` + `OBJECTIVES.md` into the new session
- **preCompact** — warns that memory lives in `HANDOFF.md`
- **stop** — if `auto_continue: true` in HANDOFF, submits a wake prompt (`loop_limit: null`)
- **sessionEnd** — append-only log

## How to stop the loop

Set in `docs/HANDOFF.md`:

```yaml
auto_continue: false
```

Or write `All alpha objectives complete` in the handoff body.

## Agent duty

After every meaningful slice:

1. Update `docs/HANDOFF.md` (keep short)
2. Commit
3. Continue the next action
