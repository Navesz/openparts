# Open Parts

> Laboratório open source e local-first de equivalência de peças do Chevrolet Vectra.

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-alpha-orange)](docs/ROADMAP.md)

[Live demo](https://navesz.github.io/openparts/) � [Read in English](README.md) · [Roadmap](docs/ROADMAP.md) · [Objetivos](docs/OBJECTIVES.md) · [Contribuir](CONTRIBUTING.md)

O Open Parts ajuda a explorar se um código de peça em um contexto Vectra pode
relacionar-se a outro — com **confiança, proveniência e limites de segurança
explícitos**. É ferramenta de engenharia e aprendizado, não garantia de
encaixe e não ordem de serviço.

Alpha docs and UI ship in **English first**; this file is a thin Portuguese entry.

## Quick start

```bash
git clone https://github.com/Navesz/openparts.git
cd openparts
corepack enable
pnpm install
pnpm dev
```

## Hard rules

- Do not invent OEM/aftermarket codes
- Safety-critical categories start conservative (`do-not-advise`)
- Failed lookups fail visibly

## License

[Apache-2.0](LICENSE)
