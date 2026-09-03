---
name: prompt-builder
description: Gera prompts autossuficientes para criar peças Beegloo em outra IA, incluindo o design system e as regras específicas da tarefa. Use quando o usuário pedir ajuda para montar, preparar, revisar ou adaptar um prompt criativo da Beegloo; não use para criar a arte nem para editar o Brand Guide.
---

# Beegloo Prompt Builder

Transforme um briefing em um prompt pronto para outra ferramenta de IA. O prompt final não deve depender de conhecimento prévio do Beegloo Guide.

Quando usada isoladamente, encerre após entregar o prompt. Quando `creative-generator` usar esta skill como dependência, entregue a ela o prompt compilado; a skill operadora continua responsável por preflight, autorização e execução.

## Modos de saída

- **Standard:** use quando o usuário quer um prompt completo para uma ferramenta externa.
- **Light:** use quando o usuário pedir concisão, rapidez ou um prompt curto. Light reduz explicações, racional, exemplos e repetição; nunca remove fatos, assets, identidade aplicável ou a hipótese composicional.

Mesmo no modo light, preserve uma cápsula mínima rastreável: objetivo e formato; conteúdo exato; papéis dos assets; paleta selecionada com hex; Outfit e hierarquia; formas e espaço; uso do logo; uma hipótese composicional positiva; processo subject-first sem background separado; imutáveis e entrega.

## Fonte vigente

Use o repositório Beegloo Guide aberto no workspace. Se ele não estiver aberto, procure primeiro em `/home/joao/Code/beegloo-guide`.

1. Leia integralmente o `AGENTS.md` aplicável e `docs/README.md`.
2. Para qualquer prompt visual, leia sempre:
   - `docs/ai/brand-context.md` e `docs/foundations/sources-of-truth.md`;
   - `docs/foundations/brand-essence.md` e `docs/foundations/composition.md`;
   - `docs/identity/logo.md`, `docs/identity/colors.md`, `docs/tokens/colors.json`, `docs/identity/typography.md` e `docs/identity/shapes.md`.
3. Leia `docs/identity/mascot.md` quando o mascote estiver presente ou for solicitado.
4. Selecione diretamente em `docs/` o guide do canal, o guide específico da tarefa e os documentos de produto aplicáveis. Em Marketing, leia também `docs/marketing/principles.md` e `docs/marketing/art-direction.md`.
5. Quando houver exploração, execução ou continuidade criativa, leia `docs/ai/process.md`, `docs/references/types.md` e `docs/ai/delivery-checklist.md`.
6. Leia `docs/ai/creative-handoff.md` somente para continuar uma direção existente.

Não transforme conteúdo marcado como `pendente` em fato.

## Completar o briefing

Extraia primeiro tudo o que o usuário já informou. Pergunte apenas por uma lacuna que altere materialmente o resultado, como canal, formato, estágio, conteúdo aprovado, produtos ou direção congelada.

Não pergunte por detalhes que o guide já resolve. Se uma pendência factual limitar apenas fidelidade, preserve-a como pendência e permita a exploração compatível com o estágio. Não invente produto, embalagem, preço, naming, ingrediente, mensagem comercial ou asset.

## Contrato de cobertura visual

Todo prompt visual deve transmitir o design system necessário para a outra IA tomar decisões com aparência de Beegloo. Não presuma que ela conhece a marca e não substitua regras concretas por frases como “siga o Brand Guide”.

Inclua no prompt, de forma explícita e aplicável à tarefa:

- essência, personalidade e anti-padrões visuais relevantes;
- paleta com valores hexadecimais e função de cada cor, não apenas os nomes das famílias;
- Outfit, pesos e comportamento tipográfico apropriado para títulos, produto, preço e texto;
- qualidades de formas, superfícies, sombras, respiro e espaço negativo;
- uso do logo oficial, sua função na hierarquia e a proibição de reconstrução generativa;
- gramática composicional: ideia dominante, hierarquia, ritmo, relação entre subject, tipografia, mensagem e espaço;
- comportamento do canal e suas diferenças em relação a outros meios;
- fatos, assets e limites de fidelidade específicos do trabalho.

Selecione em `docs/tokens/colors.json` uma paleta intencional e limitada para a direção, informando os valores hexadecimais e os papéis escolhidos. Não despeje todas as escalas no prompt e não trate o catálogo de tokens como cores que precisam aparecer simultaneamente. Quando a direção já tiver cores congeladas, preserve exatamente esses tokens. Nunca reduza a direção cromática a “use azul e rosa”.

A cápsula de design system é obrigatória mesmo em prompts curtos. Encurte explicações, não informações que determinam identidade visual.

Quando a ferramenta de destino não puder carregar Outfit, não exija texto editável impossível nem autorize aproximação generativa. Instrua a compor o conteúdo exato externamente em Outfit, renderizá-lo como SVG ou PNG transparente e inseri-lo como asset bloqueado desde o primeiro layout. Posição, largura, escala, quebras e inclinação precisam condicionar o ambiente; nunca mande encaixar a tipografia depois. Se a entrega exigir editabilidade, preserve uma camada externa em Outfit com a mesma geometria.

Para qualquer aplicação visual não-UI, inclua como restrição absoluta que não existe etapa independente de background. Subject, tipografia, mensagem e asset de marca devem estar presentes no canvas final enquanto formas, cor, luz, profundidade e ambiente são construídos. Não permita cenário vazio, superfície abstrata ou background isolado, mesmo sob o nome de camada, máscara, passagem generativa ou asset intermediário. Não ofereça exceção técnica: se a ferramenta não conseguir trabalhar sobre a composição completa preservando os assets, instrua a não gerar e sinalize a incompatibilidade. Essa restrição não se aplica a interfaces funcionais.

## Compilar o prompt

Produza um prompt suficientemente completo para uma IA sem acesso ao guide. A concisão é aplicada somente depois que a cobertura visual e factual estiver garantida:

- incorpore diretamente o briefing e os fatos aplicáveis;
- inclua uma cápsula de design system orientada a decisões, com a paleta selecionada e as regras de canal e tarefa que realmente mudam a criação;
- use o checklist e os quality gates internamente para revisar a candidata; não os copie integralmente para o prompt de geração;
- mantenha no prompt apenas proibições que protegem fontes de verdade ou evitam uma falha estrutural já comprovada;
- remova racional histórico, explicações editoriais e conteúdo irrelevante;
- não diga para a outra IA ler o guide;
- não inclua links para documentação nem caminhos locais no prompt;
- não repita a mesma regra em seções diferentes;
- mantenha o texto de usuário em português e preserve nomes oficiais exatamente;
- adapte o prompt à ferramenta de destino somente quando ela tiver sido informada.

O prompt deve declarar claramente o estágio e a entrega. Para exploração ou direção validável não-UI, preserve o processo subject-first e proíba qualquer background separado. Para refinamento ou execução, preserve decisões congeladas e fontes de verdade aplicáveis.

### Exploração sem sufocar a direção

O prompt de exploração deve propor uma hipótese composicional positiva e específica, com liberdade real de escala, crop, overlap, profundidade, ritmo e relação entre tipo e subject. Guardrails protegem fatos; não substituem a ideia visual.

Não peça a uma única geração que produza várias direções. Quando houver exploração aberta, formule primeiro hipóteses estruturais distintas e compile um prompt independente para cada direção escolhida. Se o usuário pedir um prompt imediato sem escolher, declare uma hipótese forte e gere apenas essa direção.

Evite listas longas de anti-padrões no prompt criativo. Converta-as nos poucos bloqueios que previnem as falhas mais prováveis e deixe o restante para a revisão posterior.

Antes de entregar, faça internamente uma verificação de rastreabilidade. Confirme que cada área aplicável tem instrução concreta no prompt:

1. essência e anti-padrões;
2. cores exatas e papéis cromáticos;
3. tipografia;
4. formas e espaço;
5. logo e assets oficiais;
6. composição e direção de arte;
7. comportamento do canal e da tarefa;
8. produtos, conteúdo e fatos;
9. estágio, processo e entrega.

Se uma área for aplicável e não estiver protegida ou orientada, o prompt está incompleto, inclusive no modo light. A verificação é interna: não a transforme em uma lista extensa no prompt final. Se uma área não for aplicável, omita-a sem adicionar justificativa.

## Assets visuais

Texto não substitui pixels. Quando a tarefa depender de logos, produtos ou working references, identifique cada asset e seu papel, determine preservação e transformações permitidas e nunca embuta base64.

Respeite a forma de envio solicitada:

- para anexos, escreva no prompt que os arquivos correspondentes estão anexados e forneça depois uma lista curta `Anexar junto` com os arquivos locais;
- para URLs, inclua no prompt somente as URLs públicas dos assets necessários, nunca links para documentação;
- se o usuário não indicar uma preferência, use anexos como padrão.

Se algum asset indispensável estiver ausente ou inacessível, sinalize-o antes de concluir.

## Saída

Quando houver informação suficiente:

1. entregue um único prompt copiável, sem preâmbulo explicativo, no modo solicitado;
2. inclua somente as seções necessárias à tarefa;
3. acrescente `Anexar junto` apenas quando aplicável;
4. não execute geração de imagem por conta própria nem altere o Guide;
5. não faça commit, push, publicação ou qualquer outra mutação externa.

Se o usuário pedir uma versão mais curta, reduza formulações, racional e repetição. Nunca remova a cápsula visual aplicável, fatos, fontes de verdade ou restrições que previnam falha conhecida.
