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

**Aprendizado reutilizável:** diversidade vem antes da fidelidade. Direções devem representar hipóteses composicionais, não variações cosméticas; uma opção precisa ser escolhida e congelada antes do refinamento. Em exploração de Marketing, quatro propostas podem funcionar como default útil quando a tarefa comportar esse espaço, sem se tornar regra universal.

**Aprendizado reutilizável:** exploração deve ampliar possibilidades; execução deve reduzir variação. A separação está formalizada em [Processo criativo com IA](../ai/process.md). Nesta fase, o método criativo deve ser validado antes da otimização de custo.

## Teste posterior de produção

**Observação:** um teste posterior confirmou que a IA compreendeu o processo criativo: explorou direções distintas e trabalhou direção de arte antes da execução final.

**Observação:** a falha ocorreu na produção. O modelo redesenhou e inventou o logo dentro da imagem gerada, embora o asset oficial devesse ter sido preservado.

**Aprendizado reutilizável:** geração e composição têm responsabilidades diferentes. A geração cria o ambiente; a composição insere fontes de verdade. Quando um asset oficial influencia a avaliação visual, seu arquivo real deve ser composto no estudo em vez de ser omitido ou reconstruído pelo modelo.

## Teste de continuidade com pendências

**Observação:** em um novo teste, o agente respeitou melhor as fontes de verdade e evitou inventar assets ausentes.

**Observação:** o excesso de cautela reduziu a proatividade. O agente interrompeu a exploração cedo e solicitou imagens antes de verificar se elas eram indispensáveis para a decisão conceitual em curso.

**Aprendizado reutilizável:** uma pendência factual limita o que pode ser validado com fidelidade, mas não bloqueia necessariamente a exploração. Quando o asset não for indispensável para a etapa atual, o processo pode continuar com placeholder neutro ou representação claramente conceitual, sem transformar ausência em invenção.

## Teste de gramática do canal

**Observação:** o agente avançou sem inventar fatos e usou placeholders, mas a direção conceitual ficou esquemática demais. Quatro blocos equivalentes, placeholders geométricos, pills de preço e organização modular aproximaram o menu board de um wireframe ou interface.

**Observação:** a gramática de UI dominou a composição e reduziu desejo, impacto comercial e qualidade da direção de arte. Notas de processo também passaram a competir com a peça dirigida ao consumidor.

**Aprendizado reutilizável:** conceptual ≠ schematic. Um placeholder deve preservar peso visual sem inventar detalhe factual; marketing não herda automaticamente a gramática de interface; anotações de processo ficam normalmente fora da composição para consumidor. O guide de [Marketing e criação comercial](../marketing/principles.md) registra essas regras sem transformar a estética deste menu board em padrão universal.

## Teste de composição container-first

**Observação:** um teste posterior usou formas grandes, cor, assimetria e alguma variação de escala, melhorando em relação ao wireframe anterior. Ainda assim, grandes módulos arredondados definiram primeiro a estrutura e cada família permaneceu contida em sua própria área.

**Observação:** os placeholders eram ovais genéricos, “preço pendente” virou pill e “estudo conceitual” entrou na peça. O resultado ficou entre interface, editorial e infografia, sem atingir o nível desejado de food advertising.

**Aprendizado reutilizável:** evite container-first composition como default. Quando o canal pedir protagonismo visual, teste se assunto, produto, silhueta, massa, escala, recorte, tipo e espaço podem gerar a composição. Estrutura pode ser implícita, e placeholders devem preservar silhueta composicional além de área aproximada.

Esse aprendizado orienta o processo, não proíbe cards, overlap ou simetria nem transforma uma solução específica em regra universal.

## Teste de diversidade sem readiness

**Observação:** o agente gerou quatro hipóteses realmente diferentes, validando parcialmente o processo de diversidade. Porém, nenhuma atingiu o quality bar necessário para comparação séria: Outfit não foi preservada, produtos foram substituídos por objetos abstratos sem correspondência suficiente, a identidade ficou genérica e o resultado permaneceu distante de food advertising.

**Observação:** o agente tratou a existência de quatro layouts diferentes como sucesso, embora nenhuma proposta estivesse pronta para ser defendida como direção de arte.

**Aprendizado reutilizável:** diversidade não garante qualidade. Brand readiness e subject readiness vêm antes da comparação, e cada direção precisa superar um quality floor de marca, canal, assunto, qualidade comercial e composição. Tentativas fracas devem ser rejeitadas ou regeneradas internamente antes de chegar ao usuário.

**Aprendizado reutilizável:** quatro é alvo de apresentação, não substituto de controle de qualidade. O objetivo é apresentar quatro direções distintas e good enough to compare, não apenas quatro resultados diferentes.

## Escolha e congelamento

**Observação:** após a escolha de uma direção, as decisões aprovadas foram congeladas. As rodadas seguintes passaram a preservar o caminho escolhido.

**Observação:** o refinamento funcionou melhor com feedback específico — indicando o elemento, o problema e a mudança esperada — do que com regenerações totais.

**Aprendizado reutilizável:** uma decisão aprovada não deve voltar a ser variável por padrão. Se precisar mudar, deve ser explicitamente reaberta.

## Calibração por referências

**Observação:** as regras textuais passaram a evitar invenções factuais, reconstruções de assets e parte do vazamento de UI, mas ainda permitiam direções conceituais corretas demais e publicitariamente fracas.

**Aprendizado reutilizável:** **Rules constrain. References calibrate.** Regras delimitam erros; referências gerais ajudam a reconhecer o nível desejado de impacto, ritmo, escala, profundidade e acabamento sem oferecer uma resposta-alvo.

## Creative input e benchmark de avaliação

**Observação:** inicialmente, a direção aprovada no Lovart foi registrada junto às referências de calibração. Percebemos que carregá-la antes da criação contaminaria o experimento: um agente poderia convergir para a solução conhecida em vez de demonstrar que aprendeu direção de arte com o guide.

**Observação:** a direção aprovada e os testes rejeitados específicos foram isolados como holdouts. O agente deve produzir e congelar uma direção usando fundamentos, guide de Marketing, princípios gerais de direção de arte e referências gerais permitidas. Só depois a avaliação pode abrir os [benchmarks](../benchmarks/README.md).

**Aprendizado reutilizável:** não treine a exploração com a resposta que pretende testar. Um benchmark avalia qualidade depois da criação; não deve vazar a solução-alvo para o creative input.

## Congelamento sem handoff portátil

**Observação:** quatro direções foram geradas e uma foi escolhida, mas a escolha permaneceu no contexto e nos artefatos locais daquela execução. Em um novo chat, “Direção 01” não tinha referência visual nem descrição autossuficiente e não podia ser refinada com segurança.

**Aprendizado reutilizável:** congelar uma direção sem preservar seu estado em artefatos é insuficiente. **A frozen direction must be portable.** Depois da escolha, o processo deve gerar um [handoff criativo](../ai/creative-handoff.md) no workspace da execução antes do refinamento.

**Aprendizado reutilizável:** o estado deve viver em artifacts, não apenas na conversa. Nomes numéricos ou relativos precisam vir acompanhados de imagem, hipótese, frozen, adjustable, assets, readiness, maturidade, conteúdo e próximos passos. O case ensina essa lição; o Brand Guide não mantém a instância operacional daquele trabalho.

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
