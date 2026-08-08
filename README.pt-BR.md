# OpenPartLine

> Laboratório open source e local-first de equivalência de peças do Chevrolet Vectra.

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-alpha-orange)](docs/ROADMAP.md)

[Read in English](README.md) · [Roadmap](docs/ROADMAP.md) · [Objetivos](docs/OBJECTIVES.md) · [Contribuir](CONTRIBUTING.md)

O OpenPartLine ajuda a explorar se um código de peça em um contexto Vectra pode
relacionar-se a outro — com **confiança, proveniência e limites de segurança
explícitos**. É ferramenta de engenharia e aprendizado, não garantia de
encaixe e não ordem de serviço.

## Começo rápido

```bash
git clone https://github.com/Navesz/OpenPartLine.git
cd OpenPartLine
corepack enable
pnpm install
uv sync --all-extras --dev
pnpm dev
```

## Regras duras

- Não inventar códigos OEM/aftermarket
- Peças de segurança começam em modo conservador (`do-not-advise`)
- Busca falha de forma visível quando não há evidência

Leia [Segurança](docs/SAFETY.md), [Validação](docs/VALIDATION.md) e [AGENTS.md](AGENTS.md).

## Licença

[Apache-2.0](LICENSE)
