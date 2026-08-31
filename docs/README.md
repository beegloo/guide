# Beegloo Brand Guide — fonte canônica

Este diretório guarda o conhecimento editorial da marca. A interface em React apresenta esse conteúdo para pessoas; os arquivos públicos gerados em `public/ai/`, `public/llms.txt`, `public/llms-full.txt` e `public/brand-context.json` o apresentam para agentes de IA.

## Como a fonte de verdade funciona

1. Regras e decisões vivem em `docs/`.
2. Tokens estruturados vivem em `docs/tokens/`.
3. Assets oficiais vivem em `public/logos/` e nunca são reformatados.
4. `npm run generate:ai` publica cópias legíveis e um manifesto para máquinas.
5. `npm run build` sempre executa essa geração antes de compilar o site.

Não edite manualmente arquivos marcados como gerados em `public/ai/`, `public/llms-full.txt` ou `public/brand-context.json`.

## Estados editoriais

- `oficial`: homologado e obrigatório.
- `ativo`: regra em uso, ainda sem registro formal de homologação.
- `exploratório`: hipótese que não deve ser tratada como regra.
- `pendente`: informação ausente; a IA deve perguntar e não inferir.
- `substituído`: preservado apenas como histórico, com link para a regra vigente.

## Camadas editoriais

**Brand foundations define identity. Channel guides define behavior.**

- Brand Foundations explicam como a Beegloo se identifica em qualquer aplicação; não impõem layout de canal.
- Marketing / Commercial Creative explica como a Beegloo comunica, vende e gera desejo.
- Product / UI explica como a Beegloo funciona em interfaces e experiências digitais.

Quando houver conflito, os requisitos do meio prevalecem sobre padrões genéricos de aplicação.

## Estrutura

- `foundations/`: essência, composição transversal e precedência das fontes.
- `identity/`: logo, cor, tipografia, formas e mascote.
- `products/`: catálogo factual e famílias.
- `marketing/`: guide de canal e especializações para fotografia, menu boards, hierarquia e preços.
- `ui/`: guide de canal para produto digital e interfaces funcionais.
- `ai/`: contexto portátil, contrato de prompt, processo criativo e checklist.
- `benchmarks/`: holdouts específicos carregados somente após a criação, durante avaliação.
- `handoffs/`: estado operacional portátil de trabalhos e direções em andamento.
- `case-studies/`: aprendizados de casos reais, separados de decisões oficiais.
- `decisions/`: memória datada das consultorias.
- `references/`: tipos de referência e exemplos aprovados, rejeitados ou exploratórios.
- `tokens/`: dados estruturados consumíveis por software.
