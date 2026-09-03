# Beegloo Brand Guide

Fonte canônica local do Brand Guide da Beegloo, com duas formas de uso:

- leitura humana por meio da experiência editorial em React;
- criação assistida por meio das skills `prompt-builder` e `creative-generator`.

O conhecimento vigente vive em `docs/` e as mudanças significativas são registradas em `CHANGELOG.md`.

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

## Workflow criativo

`skills/prompt-builder/` compila prompts autossuficientes, inclusive em modo light. `skills/creative-generator/` conduz o fluxo completo com preflight, autorização, geração, avaliação e continuidade.

O executor em `tools/creative/` transporta prompt e assets para a API e registra cada rodada em `creative-runs/`. Ele não contém regras da marca. O processo vigente está em `docs/ai/process.md`.

## Assets

Place official logo files in `public/logos/`. Official SVGs must be copied without changing their internal contents.

Os quatro SVGs oficiais na raiz de `public/logos/` são fontes imutáveis e permanecem preservados. Para renderização no navegador e uso em prompts, o preparo de assets copia byte a byte as versões aprovadas em `public/logos/display/` para URLs públicas em inglês dentro de `public/brand/logos/`.
