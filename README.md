# Beegloo Brand Guide

Fonte canônica local do Brand Guide da Beegloo, construída para dois públicos:

- pessoas, por meio da experiência editorial em React;
- agentes de IA, por meio de Markdown, `llms.txt` e JSON estruturado.

O conhecimento vigente vive em `docs/`. Memória histórica vive em `archive/`, benchmarks de avaliação pós-criação em `benchmarks/` e mudanças significativas em `CHANGELOG.md`.

## Requirements

- Node.js 20.19 or later
- npm

## Local development

```sh
npm install
npm run dev
```

O comando gera primeiro os artefatos públicos para IA a partir de `docs/`.

## Production build

```sh
npm run build
npm run preview
```

The production output is written to `dist/`. The project is compatible with Cloudflare Pages using `npm run build` and the `dist` output directory.

## Contexto para IA

Após a publicação, use `/llms.txt` para escolher o menor contexto adequado ao trabalho:

- `/ai/context/core.md`: entrada mínima para qualquer tarefa;
- `/ai/context/marketing.md`, `/ai/context/ui.md`, `/ai/context/menu-board.md`, `/ai/context/menus.md` e `/ai/context/social-product.md`: contexto por intenção;
- `/ai/context/workflow.md`: processo criativo e continuidade;
- `/brand-context.json`: manifesto, tokens e estados em formato estruturado;
- `/ai/`: cópias públicas dos documentos canônicos.

Edite regras em `docs/`, nunca nas cópias geradas. Para atualizar os formatos públicos sem compilar o site:

```sh
npm run generate:ai
```

## Assets

Place official logo files in `public/logos/`. Official SVGs must be copied without changing their internal contents.

Os quatro SVGs oficiais na raiz de `public/logos/` são fontes imutáveis e permanecem preservados. Para renderização no navegador, o build copia byte a byte as versões aprovadas no arquivo visual de referência, mantidas em `public/logos/display/`, para URLs públicas em inglês dentro de `public/brand/logos/`. Essas versões preservam a geometria e usam a grafia válida de `viewBox`, evitando corte no navegador.
