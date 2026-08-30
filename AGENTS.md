# Beegloo Brand Guide

## Ordem de leitura para agentes

1. Comece por `docs/ai/brand-context.md`. Ele contém o contexto portátil, as invariantes da marca e os limites contra inferência.
2. Consulte `docs/foundations/sources-of-truth.md` para resolver precedência e conflitos entre fontes.
3. Leia os documentos específicos em `docs/` relacionados à tarefa antes de editar código, conteúdo ou assets.
4. Trate qualquer informação marcada como `pendente` como desconhecida. Pergunte ou sinalize a lacuna; nunca complete por inferência.

## Arquitetura de conteúdo

- `docs/` é a fonte canônica editorial do Beegloo Brand Guide.
- Edite regras, decisões e conteúdo de marca somente em `docs/`.
- `public/ai/`, `public/llms.txt`, `public/llms-full.txt`, `public/brand-context.json` e `public/docs-index.json` são artefatos gerados. Nunca os edite manualmente.
- Após qualquer mudança em `docs/`, execute `npm run generate:ai` e versione os artefatos públicos atualizados junto com a fonte.
- Antes de concluir mudanças relevantes, execute `npm run build`.
- Registre novas consultorias, decisões, exceções, substituições de regra e homologações em `docs/decisions/`. Use `docs/decisions/_template.md` como base e preserve o histórico; não reescreva silenciosamente decisões anteriores.

## Assets e logos

- `public/logos/Padrão.svg`, `public/logos/Sobre.svg`, `public/logos/Ícone Azul.svg` e `public/logos/Ícone Rosa.svg` são fontes oficiais imutáveis. Não altere, otimize, reformate ou regrave nenhum byte interno.
- A aplicação usa as versões aprovadas para renderização em `public/logos/display/`.
- O gerador publica cópias dessas versões em URLs estáveis e em inglês dentro de `/brand/logos/`:
  - `/brand/logos/primary.svg`
  - `/brand/logos/on-color.svg`
  - `/brand/logos/icon-blue.svg`
  - `/brand/logos/icon-pink.svg`
- Nunca substitua logos oficiais por aproximações, texto, CSS, redesenho ou geração por IA.
- Se um asset estiver ausente ou uma regra de aplicação ainda não estiver homologada, sinalize a pendência.

## Pendências factuais conhecidas

As pendências abaixo são deliberadas e impedem que agentes inventem informações:

- Catálogo completo das famílias CROC, SHAKE, SUNNY e CREMIX, incluindo categorias, sabores, variações, tamanhos e situação comercial.
- Fotografias e embalagens oficiais dos produtos.
- Construção oficial do mascote, incluindo asset, poses, expressões e regras homologadas.
- Homologação detalhada de aplicação dos logos, incluindo restrições e casos de uso além dos SVGs já aprovados.
- Safe areas e dimensões tipográficas de menu boards.
- Regras finais de formatação de preços.
- Referências visuais aprovadas e rejeitadas.
- Direção fotográfica específica por família de produto.

Não trate essas pendências como defeitos do sistema e não as resolva por suposição. Mantenha o status `pendente` até existir fonte factual homologada ou decisão humana registrada.

## Regras permanentes de marca

- Este repositório é a cópia canônica local do Beegloo Brand Guide.
- Preserve fundos pastel suaves, grandes superfícies e cards sem borda, raios fortes e bastante respiro.
- Use Outfit como tipografia principal.
- Azul e rosa formam o núcleo cromático; marrom e verde são complementares.
- Mantenha completas as escalas de cor 50–950.
- Cubra Linguagem Visual, Logo, Cores, Tipografia, Formas/UI, Mascote, Composição, Aplicações e Diretrizes para IA.
- Antes de remover qualquer temporário, confirme que nenhum conteúdo exclusivo ficou fora deste repositório.
- Mantenha o código em `src/` e arquivos estáticos em `public/`.
- Use nomes de arquivos, pastas, identificadores e URLs em inglês. Mantenha textos exibidos ao usuário em português.
- Não versione segredos, arquivos `.env`, `node_modules/`, `dist/` ou `.vercel/`.
- Mantenha as mudanças acessíveis, responsivas e adequadas à publicação na Vercel.
- Não publique sem solicitação explícita.
