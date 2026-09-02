# Beegloo Brand Guide — fonte canônica

Este diretório guarda o conhecimento editorial da marca. A interface importa estes arquivos diretamente para leitura humana; a Beegloo Prompt Builder seleciona o conteúdo aplicável e o transforma em prompts para outras IAs.

## Princípio de arquitetura

**The guide should say fewer things with more authority.** Regras permanentes, instruções do trabalho e referências criativas têm funções diferentes e não devem ser acumuladas em um único contexto.

## Camadas

- **Core:** essência e precedência em `foundations/`, mais o contexto mínimo em `ai/brand-context.md`.
- **Channel Guides:** comportamento de Marketing em `marketing/principles.md` e de Produto / UI em `ui/principles.md`.
- **Task Guides:** regras específicas, como menu boards, preços, fotografia e fidelidade de produto; carregadas apenas quando aplicáveis.
- **Workflow:** processo, handoff e checklist em `ai/`; orientam como trabalhar, não como a marca deve parecer.
- **Creative References:** tipos e biblioteca em `references/`; calibram qualidade sem prescrever solução.
- **Project State:** brief, handoff ativo, imagens e proxies de uma execução vivem no workspace do projeto, fora deste guide.
- **Templates:** estruturas reutilizáveis em `templates/`, copiadas para o workspace do trabalho.

Fora deste diretório, `archive/` preserva memória histórica, `benchmarks/` contém holdouts de avaliação pós-criação e `CHANGELOG.md` resume mudanças significativas.

## Roteamento

Comece por `ai/brand-context.md` e `foundations/sources-of-truth.md`. Depois carregue somente:

- o canal aplicável em `marketing/` ou `ui/`;
- o guide específico da tarefa, quando existir;
- `products/catalog.md` e `products/product-fidelity.md` quando houver produto;
- `ai/process.md`, `references/types.md` e `ai/delivery-checklist.md` quando houver trabalho criativo com IA;
- `ai/creative-handoff.md` somente para continuar uma direção existente.

A skill em `skills/beegloo-prompt-builder/` aplica esse roteamento para gerar prompts autossuficientes. Ela não é uma segunda fonte de regras.

## Fonte de verdade e publicação

1. Conhecimento vigente vive em `docs/`.
2. Tokens estruturados vivem em `docs/tokens/`.
3. Assets oficiais vivem em `public/logos/` e nunca são reformatados.
4. A aplicação inclui os Markdown no build sem criar uma árvore editorial paralela em `public/`.
5. `npm run build` prepara os aliases públicos dos logos e compila o site.

## Estados editoriais

- `oficial`: homologado e obrigatório.
- `ativo`: regra em uso.
- `exploratório`: hipótese, não regra.
- `pendente`: desconhecido; nunca completar por inferência.
- `substituído`: histórico com indicação da regra vigente.
