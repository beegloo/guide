# Beegloo Brand Guide — fonte canônica

Este diretório guarda o conhecimento editorial da marca. A interface apresenta o conteúdo para pessoas; os artefatos em `public/` oferecem rotas menores e legíveis para agentes de IA.

## Princípio de arquitetura

**The guide should say fewer things with more authority.** Regras permanentes, instruções do trabalho e referências criativas têm funções diferentes e não devem ser acumuladas em um único contexto.

## Camadas

- **Core:** essência e precedência em `foundations/`, mais o contexto mínimo em `ai/brand-context.md`.
- **Channel Guides:** comportamento de Marketing em `marketing/principles.md` e de Produto / UI em `ui/principles.md`.
- **Task Guides:** regras específicas, como menu boards, preços, fotografia e fidelidade de produto; carregadas apenas quando aplicáveis.
- **Workflow:** processo, handoff e checklist em `ai/`; orientam como trabalhar, não como a marca deve parecer.
- **Creative References:** tipos e biblioteca em `references/`; calibram qualidade sem prescrever solução.
- **Benchmarks:** holdouts em `benchmarks/`; proibidos durante a criação e permitidos somente na avaliação posterior.
- **Case Studies e Decisions:** memória e histórico; não entram no contexto padrão.
- **Project State:** brief, handoff ativo, imagens e proxies de uma execução vivem no workspace do projeto, fora deste guide.
- **Templates:** estruturas reutilizáveis em `templates/`, copiadas para o workspace do trabalho.

## Roteamento para agentes

Comece por um bundle de contexto, não por toda a documentação:

- `/ai/context/core.md`: identidade e autoridade mínimas;
- `/ai/context/marketing.md`: criação comercial;
- `/ai/context/ui.md`: interfaces funcionais;
- `/ai/context/menu-board.md`: task guide de menu board;
- `/ai/context/workflow.md`: processo criativo e continuidade.

`/llms.txt` funciona como roteador para os bundles por intenção.

## Fonte de verdade e geração

1. Regras e decisões vivem em `docs/`.
2. Tokens estruturados vivem em `docs/tokens/`.
3. Assets oficiais vivem em `public/logos/` e nunca são reformatados.
4. `npm run generate:ai` publica cópias, bundles e manifestos para máquinas.
5. `npm run build` executa essa geração antes de compilar o site.

Não edite manualmente `public/ai/`, `public/llms.txt`, `public/brand-context.json` ou `public/docs-index.json`.

## Estados editoriais

- `oficial`: homologado e obrigatório.
- `ativo`: regra em uso.
- `exploratório`: hipótese, não regra.
- `pendente`: desconhecido; nunca completar por inferência.
- `substituído`: histórico com indicação da regra vigente.
