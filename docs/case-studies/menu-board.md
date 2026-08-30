# Case study — processo criativo do menu board

Status: ativo
Última revisão: 2026-08-30

Este documento registra o aprendizado de processo do primeiro caso real usado para validar o fluxo criativo com IA. Ele não homologa detalhes visuais, preços, produtos ou especificações do menu board.

## Como ler este caso

- **Observação:** o que ocorreu neste trabalho.
- **Aprendizado reutilizável:** princípio que pode orientar trabalhos futuros.
- **Decisão oficial:** regra formal registrada em `docs/decisions/`.

## Contexto e problema

**Observação:** era necessário desenvolver um menu board coerente com a Beegloo, comercialmente claro e confiável em seus elementos reais. A entrega combinava decisões de direção de arte com fotografia, embalagem, branding, preço, conteúdo e layout.

## Abordagem inicial

**Observação:** as primeiras tentativas pediam à IA que resolvesse simultaneamente layout final, fotografia, embalagem, branding, preço e direção de arte.

**Observação:** os resultados ficaram genéricos ou pouco confiáveis. Muitas variáveis abertas no mesmo pedido dificultaram avaliar a direção visual e aumentaram a chance de a IA improvisar fatos, descaracterizar elementos aprovados ou trocar uma decisão já boa ao corrigir outra.

**Aprendizado reutilizável:** uma rodada não deve concentrar várias decisões criativas ainda abertas. Quanto mais objetivos independentes existem em uma geração, menor é o controle sobre cada um.

## Mudança para direção de arte

**Observação:** o processo melhorou quando foi criada uma etapa exclusiva de direção de arte, anterior à execução final. Nela, o objetivo era comparar alternativas de linguagem e composição, não produzir uma peça pronta.

**Observação:** múltiplas direções foram geradas antes da execução. A diversidade entre propostas tornou a escolha mais consciente e evitou confundir pequenas variações com caminhos realmente distintos.

**Aprendizado reutilizável:** exploração deve ampliar possibilidades; execução deve reduzir variação. A separação está formalizada em [Processo criativo com IA](../ai/process.md).

## Teste posterior de produção

**Observação:** um teste posterior confirmou que a IA compreendeu o processo criativo: explorou direções distintas e trabalhou direção de arte antes da execução final.

**Observação:** a falha ocorreu na produção. O modelo redesenhou e inventou o logo dentro da imagem gerada, embora o asset oficial devesse ter sido preservado.

**Aprendizado reutilizável:** geração e composição têm responsabilidades diferentes. A geração cria o ambiente; a composição insere fontes de verdade. Quando um asset oficial influencia a avaliação visual, seu arquivo real deve ser composto no estudo em vez de ser omitido ou reconstruído pelo modelo.

## Teste de continuidade com pendências

**Observação:** em um novo teste, o agente respeitou melhor as fontes de verdade e evitou inventar assets ausentes.

**Observação:** o excesso de cautela reduziu a proatividade. O agente interrompeu a exploração cedo e solicitou imagens antes de verificar se elas eram indispensáveis para a decisão conceitual em curso.

**Aprendizado reutilizável:** uma pendência factual limita o que pode ser validado com fidelidade, mas não bloqueia necessariamente a exploração. Quando o asset não for indispensável para a etapa atual, o processo pode continuar com placeholder neutro ou representação claramente conceitual, sem transformar ausência em invenção.

## Escolha e congelamento

**Observação:** após a escolha de uma direção, as decisões aprovadas foram congeladas. As rodadas seguintes passaram a preservar o caminho escolhido.

**Observação:** o refinamento funcionou melhor com feedback específico — indicando o elemento, o problema e a mudança esperada — do que com regenerações totais.

**Aprendizado reutilizável:** uma decisão aprovada não deve voltar a ser variável por padrão. Se precisar mudar, deve ser explicitamente reaberta.

## Conteúdo comercial e fidelidade

**Observação:** preços e conteúdo comercial entraram depois da definição da direção, quando já podiam ser tratados como informação a compor, e não como parte da exploração visual.

**Observação:** produto e embalagem reais precisaram ser tratados como fontes de verdade, não como sugestões estéticas. As regras aplicáveis já estão documentadas em [Fontes de verdade](../foundations/sources-of-truth.md) e [Fidelidade de produtos e embalagens](../products/product-fidelity.md).

**Aprendizado reutilizável:** a liberdade criativa diminui à medida que cresce a importância factual do elemento.

## Decisão oficial

O fluxo criativo em etapas passa a ser o processo recomendado para trabalhos criativos com IA na Beegloo. A decisão formal, suas consequências e seus limites estão em [Fluxo criativo em etapas](../decisions/2026-08-30-staged-ai-creative-process.md).

## Limites da generalização

O caso valida um método, não uma estética específica. Layout, quantidade de direções, estilo fotográfico, hierarquia, dimensões, preços e demais detalhes deste menu board não se tornam regras universais sem homologação própria. Pendências existentes continuam pendentes.

## Principal aprendizado

Usar IA como processo criativo em etapas, e não como gerador de peça final em um único pedido.
