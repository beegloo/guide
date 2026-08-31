# Beegloo Brand Guide

## Ordem de leitura para agentes

1. Comece pelo menor bundle adequado: `/ai/context/core.md` por padrão; `/ai/context/marketing.md`, `/ai/context/ui.md` ou `/ai/context/menu-board.md` conforme a intenção.
2. Identifique o canal antes de escolher a gramática composicional. Use `/ai/context/workflow.md` quando houver exploração, execução ou continuidade criativa com IA.
3. No repositório-fonte, consulte os documentos canônicos indicados pelo bundle antes de editar regras ou conteúdo.
4. Antes de continuar uma peça existente, procure um handoff ativo no workspace da execução e valide-o conforme `docs/ai/creative-handoff.md`. Não dependa do histórico da conversa para identificar uma direção congelada.
5. Em trabalhos criativos com IA, leia `docs/ai/process.md` antes de iniciar exploração ou execução.
6. Leia os documentos específicos em `docs/` relacionados à tarefa antes de editar código, conteúdo ou assets.
7. Trate qualquer informação marcada como `pendente` como desconhecida. Pergunte ou sinalize a lacuna; nunca complete por inferência.
8. Não carregue `docs/benchmarks/` antes da criação. Benchmarks são holdouts de avaliação e só podem ser consultados depois que a direção candidata estiver criada e congelada.

## Arquitetura de conteúdo

- `docs/` é a fonte canônica editorial do Beegloo Brand Guide.
- Edite regras, decisões e conteúdo de marca somente em `docs/`.
- `public/ai/`, `public/llms.txt`, `public/brand-context.json` e `public/docs-index.json` são artefatos gerados. Nunca os edite manualmente.
- `public/llms.txt` roteia agentes para bundles em `public/ai/context/`.
- Case studies, decisões e estado de projeto não entram nos bundles padrão. Benchmarks permanecem separados para avaliação posterior.
- `docs/ai/creative-handoff.md` define o protocolo reutilizável. Instâncias reais de handoff vivem no workspace do trabalho, não neste Brand Guide.
- Briefs, handoffs ativos, imagens e working proxies de uma execução pertencem ao workspace do projeto. Não registre estado circunstancial como regra permanente do guide.
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
- Preserve fundos pastel suaves, formas macias, grandes superfícies e bastante respiro quando forem adequados ao canal.
- Use Outfit como tipografia principal.
- Outfit é identidade imutável. Se a ferramenta generativa não puder preservá-la, componha a tipografia oficial posteriormente ou use uma ferramenta adequada; não aceite aproximação silenciosa.
- Azul e rosa formam o núcleo cromático; marrom e verde são complementares.
- Mantenha completas as escalas de cor 50–950.
- Fundamentos de marca definem identidade; guides de canal definem comportamento.
- Marketing não deve herdar automaticamente cards, pills, módulos ou outros padrões de UI.
- Em conflitos, requisitos do meio prevalecem sobre padrões genéricos de aplicação.
- Cubra Linguagem Visual, Logo, Cores, Tipografia, Formas, Mascote, Marketing, Produto/UI, Composição, Aplicações e Diretrizes para IA.
- Antes de remover qualquer temporário, confirme que nenhum conteúdo exclusivo ficou fora deste repositório.
- Mantenha o código em `src/` e arquivos estáticos em `public/`.
- Use nomes de arquivos, pastas, identificadores e URLs em inglês. Mantenha textos exibidos ao usuário em português.
- Não versione segredos, arquivos `.env`, `node_modules/`, `dist/` ou `.wrangler/`.
- Mantenha as mudanças acessíveis, responsivas e adequadas à publicação no Cloudflare Pages.
- Não publique sem solicitação explícita.
