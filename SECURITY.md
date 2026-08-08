# Security policy

## Supported versions

Open Parts is pre-1.0. Fixes target `main` and the latest tagged pre-release.

| Version | Supported |
|---|---|
| `main` | Best effort |
| Latest tagged pre-release | Yes, once published |
| Older pre-releases | No |

## Report a vulnerability privately

Do not open a public issue for an exploitable vulnerability.

Use GitHub private vulnerability reporting on the repository once enabled.
Include affected commit, impact, minimal reproduction, and suggested mitigation.

If private reporting is unavailable, contact the repository owner via a private
channel on their GitHub profile.

## Security boundaries

- Malformed `.oparts.json` and fixture payloads
- Path traversal in future import/export features
- Supply-chain risk in Actions and dependencies
- Prompt injection via untrusted catalog text in future OCR features

Catalog “wrong price / wrong fitment” disputes are product-safety issues, not
always security vulnerabilities — still report privately if exploitation is realistic.
