---
name: beegloo-prompt-builder
description: Gera prompts autossuficientes para criar peças Beegloo em outra IA. Use quando o usuário pedir ajuda para montar, preparar, revisar ou adaptar um prompt criativo da Beegloo; não use para criar a arte nem para editar o Brand Guide.
---

# Beegloo Prompt Builder

Transforme um briefing em um prompt pronto para outra ferramenta de IA. O prompt final não deve depender de conhecimento prévio do Beegloo Guide.

## Fonte vigente

Use o repositório Beegloo Guide aberto no workspace. Se ele não estiver aberto, procure primeiro em `/home/joao/Code/beegloo-guide`.

1. Leia integralmente o `AGENTS.md` aplicável e `docs/README.md`.
2. Leia `docs/ai/brand-context.md` e `docs/foundations/sources-of-truth.md` como base.
3. Selecione diretamente em `docs/` o guide de canal, o guide específico da tarefa e os documentos de produto aplicáveis.
4. Quando houver exploração, execução ou continuidade criativa, leia `docs/ai/process.md`, `docs/references/types.md` e `docs/ai/delivery-checklist.md`.
5. Leia `docs/ai/creative-handoff.md` somente para continuar uma direção existente.

Nunca carregue `benchmarks/` antes da criação nem use `archive/` como contexto normal. Não transforme conteúdo marcado como `pendente` em fato.

## Completar o briefing

Extraia primeiro tudo o que o usuário já informou. Pergunte apenas por uma lacuna que altere materialmente o resultado, como canal, formato, estágio, conteúdo aprovado, produtos ou direção congelada.

Não pergunte por detalhes que o guide já resolve. Se uma pendência factual limitar apenas fidelidade, preserve-a como pendência e permita a exploração compatível com o estágio. Não invente produto, embalagem, preço, naming, ingrediente, mensagem comercial ou asset.

## Compilar o prompt

Produza o menor prompt que permaneça suficiente para uma IA sem acesso ao guide:

- incorpore diretamente o briefing e os fatos aplicáveis;
- selecione apenas invariantes, regras de canal, regras de tarefa, processo e quality gates que mudem decisões nesta tarefa;
- remova racional histórico, explicações editoriais e conteúdo irrelevante;
- não diga para a outra IA ler o guide;
- não inclua links para documentação nem caminhos locais no prompt;
- não repita a mesma regra em seções diferentes;
- mantenha o texto de usuário em português e preserve nomes oficiais exatamente;
- adapte o prompt à ferramenta de destino somente quando ela tiver sido informada.

O prompt deve declarar claramente o estágio e a entrega. Para exploração ou direção validável, preserve o processo subject-first e impeça background-first sem reproduzir todo o workflow. Para refinamento ou execução, preserve decisões congeladas e fontes de verdade aplicáveis.

## Assets visuais

Texto não substitui pixels. Quando a tarefa depender de logos, produtos ou working references, identifique cada asset e seu papel, determine preservação e transformações permitidas e nunca embuta base64.

Respeite a forma de envio solicitada:

- para anexos, escreva no prompt que os arquivos correspondentes estão anexados e forneça depois uma lista curta `Anexar junto` com os arquivos locais;
- para URLs, inclua no prompt somente as URLs públicas dos assets necessários, nunca links para documentação;
- se o usuário não indicar uma preferência, use anexos como padrão.

Se algum asset indispensável estiver ausente ou inacessível, sinalize-o antes de concluir.

## Saída

Quando houver informação suficiente:

1. entregue um único prompt copiável, sem preâmbulo explicativo;
2. inclua somente as seções necessárias à tarefa;
3. acrescente `Anexar junto` apenas quando aplicável;
4. não crie a arte, não execute geração de imagem e não altere o guide;
5. não faça commit, push, publicação ou qualquer outra mutação externa.

Se o usuário pedir uma versão mais curta, reduza formulações e detalhes, nunca fatos, fontes de verdade ou restrições que previnam falha conhecida.
