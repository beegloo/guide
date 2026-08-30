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

## Estrutura

- `foundations/`: princípios e precedência das fontes.
- `identity/`: logo, cor, tipografia, formas e mascote.
- `products/`: catálogo factual e famílias.
- `photography/`: direção e fidelidade.
- `commercial/`: menu boards, hierarquia e preços.
- `applications/`: composição e aplicações prioritárias.
- `ai/`: contexto portátil, contrato de prompt e checklist.
- `decisions/`: memória datada das consultorias.
- `references/`: exemplos aprovados, rejeitados e exploratórios.
- `tokens/`: dados estruturados consumíveis por software.
