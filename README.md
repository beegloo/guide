# Beegloo Brand Guide

Fonte canônica local do Brand Guide da Beegloo, com duas formas de uso:

- leitura humana por meio da experiência editorial em React;
- geração de prompts para outras IAs por meio da skill `beegloo-prompt-builder`.

O conhecimento vigente vive em `docs/`. Memória histórica vive em `archive/`, benchmarks de avaliação pós-criação em `benchmarks/` e mudanças significativas em `CHANGELOG.md`.

## Requirements

- Node.js 20.19 or later
- npm

## Local development

```sh
npm install
npm run dev
```

O comando prepara os aliases públicos dos logos antes de iniciar a aplicação.

## Production build

```sh
npm run build
npm run preview
```

The production output is written to `dist/`. The project is compatible with Cloudflare Pages using `npm run build` and the `dist` output directory.

## Prompts para IA

A skill versionada em `skills/beegloo-prompt-builder/` lê diretamente os documentos canônicos e gera prompts autossuficientes para ferramentas criativas externas. Regras continuam somente em `docs/`; a skill contém comportamento de seleção e compilação, não uma cópia do Brand Guide.

## Assets

Place official logo files in `public/logos/`. Official SVGs must be copied without changing their internal contents.

Os quatro SVGs oficiais na raiz de `public/logos/` são fontes imutáveis e permanecem preservados. Para renderização no navegador e uso em prompts, o preparo de assets copia byte a byte as versões aprovadas em `public/logos/display/` para URLs públicas em inglês dentro de `public/brand/logos/`.
