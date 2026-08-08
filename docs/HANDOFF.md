# Open Parts — HANDOFF (compact memory)

```yaml
auto_continue: true
project: Open Parts
repo_dir: C:\Users\leona\OneDrive\Desktop\PROJETO
github: https://github.com/Navesz/openparts
stack: SvelteKit + TypeScript + Vitest + npm
dev_server: http://127.0.0.1:5173/
```

## Hard rules
- No invented OEM numbers; SYN-* only for demo
- do-not-advise for safety-critical defaults
- Commit each slice; git author via env only

## Done
- Public repo pushed: https://github.com/Navesz/openparts
- Runnable alpha UI + .oparts.json + tests (6) + build
- Continuity hooks armed; milestone issues opened
- CI example at docs/github/ci.yml.example (needs `workflow` OAuth scope to live under .github/workflows)

## Next
1. Move CI example into .github/workflows after `gh auth refresh -s workflow`
2. GitHub Pages from build/
3. Polish UI/docs; close milestone issues with evidence
4. Keep auto_continue true until alpha feels strong

## Resume
Continue from this file. Never invent OEM numbers.