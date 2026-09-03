# Beegloo Brand Guide

## Ordem de leitura para agentes

1. Comece por `docs/ai/brand-context.md` e `docs/foundations/sources-of-truth.md`.
2. Identifique o canal e leia diretamente o guide aplicável em `docs/marketing/` ou `docs/ui/`.
3. Acrescente o guide específico da tarefa e os documentos de produto relacionados, sem carregar áreas irrelevantes.
4. Antes de continuar uma peça existente, procure um handoff ativo no workspace da execução e valide-o conforme `docs/ai/creative-handoff.md`. Não dependa do histórico da conversa para identificar uma direção congelada.
5. Em trabalhos criativos com IA, leia `docs/ai/process.md` antes de iniciar exploração ou execução.
6. Leia os documentos específicos em `docs/` relacionados à tarefa antes de editar código, conteúdo ou assets.
7. Trate qualquer informação marcada como `pendente` como desconhecida. Pergunte ou sinalize a lacuna; nunca complete por inferência.

## Arquitetura de conteúdo

- `docs/` é a fonte canônica editorial do Beegloo Brand Guide.
- Edite regras, decisões e conteúdo de marca somente em `docs/`.
- A interface importa os Markdown diretamente de `docs/` durante o build; não existe uma cópia editorial pública paralela.
- `skills/prompt-builder/` compila prompts autossuficientes; `skills/creative-generator/` conduz geração e refinamento pela API. Não duplique regras da marca nas skills.
- `tools/creative/` é um executor neutro: valida, envia e registra requisições. Não coloque regras editoriais ou presets circunstanciais dentro da ferramenta.
- Chamadas pagas e envio de assets a serviços externos exigem autorização explícita imediatamente antes da execução.
- `docs/ai/creative-handoff.md` define o protocolo reutilizável. Instâncias reais de handoff vivem no workspace do trabalho, não neste Brand Guide.
- Briefs, handoffs ativos, imagens e working proxies de uma execução pertencem ao workspace do projeto. Não registre estado circunstancial como regra permanente do guide.
- Antes de concluir mudanças relevantes, execute `npm run build`.
- Incorpore regras vigentes nos documentos canônicos e registre mudanças significativas em `CHANGELOG.md`.

## Assets e logos

- `public/logos/Padrão.svg`, `public/logos/Sobre.svg`, `public/logos/Ícone Azul.svg` e `public/logos/Ícone Rosa.svg` são fontes oficiais imutáveis. Não altere, otimize, reformate ou regrave nenhum byte interno.
- A aplicação usa as versões aprovadas para renderização em `public/logos/display/`.
- O preparo de assets publica cópias dessas versões em URLs estáveis e em inglês dentro de `/brand/logos/`:
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
