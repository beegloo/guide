# Processo criativo com IA

Status: ativo
Última revisão: 2026-09-01

Este documento é o workflow para criação, continuação e execução com IA. Ele não substitui o [contexto essencial](brand-context.md), os guides de canal nem o brief do trabalho.

## Princípios operacionais

**Exploration ≠ Execution.** Antes da escolha, procure hipóteses realmente distintas e invista em comparação visual. Depois da escolha, preserve a direção e concentre esforço em refinamento e produção.

**Low finish is acceptable. Low evaluability is not.** Uma direção pode ter acabamento provisório, mas precisa permitir julgamento real de composição, hierarquia, desejo, ritmo, escala, mensagem, identidade, relação produto/tipo e uso do espaço.

**Product, typography and commercial message must enter the composition together.** Durante exploração e direção de arte validável, a primeira materialização visual já deve integrar subject, naming, preço ou mensagem, tipografia e ambiente. A hipótese não nasce de um background ao qual esses elementos são adicionados posteriormente.

O background pode existir tecnicamente como camada, máscara ou passagem de geração, mas somente depois que as relações entre subject, tipo e mensagem estiverem definidas. Ele não é concebido, aprovado ou entregue isoladamente; o ambiente responde à composição.

**A liberdade criativa diminui conforme aumenta a importância factual.** Logo, produto, embalagem, naming, preço, ingredientes e textos aprovados têm liberdade praticamente nula. Composição, fundo, luz, enquadramento, ritmo e formas de apoio podem ser explorados dentro da marca e do canal.

**Missing factual assets should constrain fidelity, not stop exploration.** Marque a ausência e verifique se ela é indispensável para a decisão atual. Se não for, continue com representação claramente conceitual. Se for, solicite o asset. Nunca substitua ausência factual por invenção.

Decisões aprovadas ficam **congeladas**. Não as reinterprete, combine ou reabra sem instrução explícita.

## 1. Enquadrar o trabalho

Identifique canal, formato, objetivo, conteúdo, prioridade, estágio e entrega. Preencha o [creative brief](../templates/creative-brief.md) e carregue apenas o bundle adequado.

Separe:

- imutável: fatos, assets e decisões aprovadas;
- explorável: decisões criativas abertas nesta etapa;
- pendente: informação desconhecida;
- fora de escopo: decisões que este trabalho não deve resolver.

Não peça à IA para resolver simultaneamente várias decisões criativas ainda abertas. Divida o problema em etapas avaliáveis.

## 2. Confirmar prontidão

- **Brand readiness:** identidade necessária está disponível ou prevista para composição oficial.
- **Subject readiness:** produto ou proxy tem fidelidade suficiente para a decisão atual.
- **Quality readiness:** a proposta pode alcançar o nível exigido pelo canal.

Uma pendência pode impedir validação de fidelidade sem impedir exploração. Declare claramente qual das duas está limitada. Use [mood, brand e source of truth](../references/types.md) com papéis distintos.

## 3. Trabalhar conforme o estágio

Dimensão, proporção e suporte orientam a composição desde o início. O formato técnico de produção pertence ao estágio final: “A4” não significa automaticamente “PDF agora”.

### 3.1 Exploração

O objetivo é testar hipóteses visuais rapidamente. Produza previews de baixa ou média fidelidade, no aspect ratio correto e completos o suficiente para comparação.

Cada hipótese deve variar estruturalmente hierarquia, escala, crop, profundidade, agrupamento, ritmo, densidade, produto, tipografia ou espaço — não apenas fundo, paleta ou decoração.

A saída não é PDF final, arquivo de impressão, pacote de produção, coleção de layers, background isolado, moodboard, wireframe ou estudo de ambiente separado. Imperfeições de acabamento são aceitáveis quando a ideia permanece julgável.

Durante esta etapa, não consulte [benchmarks de avaliação](/evaluation/benchmarks/README.md).

### 3.2 Direção de arte validável

O objetivo é permitir escolha real entre direções. Entregue uma peça visual completa por direção, com proporção ou dimensão correta e fidelidade suficiente para julgar a hipótese.

O primeiro visual avaliável integra produto, tipografia, naming, preço ou mensagem, grafismos, espaço negativo e ambiente. Subject, tipo e conteúdo comercial determinam juntos escala, crop, overlap, hierarquia e planos; o background não precede essas relações.

Prefira preview raster quando o meio final não exigir outro formato nesta etapa. Não produza automaticamente PDF final, arquivo pronto para impressão, assets separados, exports derivados ou múltiplos formatos, salvo solicitação explícita do briefing.

Depois da escolha, registre a imagem, decisões congeladas, elementos ajustáveis, assets, conteúdo, pendências e próximo passo em um [creative handoff](creative-handoff.md). Só então avance ao refinamento.

### 3.3 Refinamento

O objetivo é desenvolver uma direção já escolhida. Aumente precisão, acabamento, microtipografia, alinhamentos, tratamento de imagem, consistência e integração comercial sem reabrir a hipótese congelada.

Refinamento ainda não implica automaticamente um arquivo técnico final. Feedback deve ser específico; evite regeneração total quando um ajuste localizado resolver o problema.

### 3.4 Final / produção

O objetivo é preparar a entrega técnica aprovada. Somente aqui produza, quando aplicável, PDF final, arquivo de impressão, dimensões fechadas, bleed, safe area, resolução final, versões derivadas, exports e pacote de entrega.

Produto, embalagem, logo, preço, textos e demais fatos devem vir de fontes de verdade. Para produtos e proxies, siga [fidelidade de produto](../products/product-fidelity.md).

## 4. Avaliar e entregar

Aplique o [checklist de entrega](delivery-checklist.md) conforme o estágio declarado. Depois que uma direção candidata estiver criada e congelada, benchmarks podem entrar como holdout de avaliação, nunca como resposta-alvo.

Antes de apresentar exploração ou direção validável, confirme:

1. nenhum background foi concebido ou aprovado antes dos subjects;
2. o ambiente depende das relações específicas entre produto, tipo e mensagem;
3. os produtos participam da estrutura em vez de apenas ocupar uma superfície pronta;
4. naming e preço participam da composição em vez de funcionar somente como legendas;
5. as direções diferem por hipóteses estruturais, não apenas pelo ambiente.

Se algum dos quatro primeiros critérios falhar, ou se as diferenças forem superficiais, a direção ainda não está pronta para apresentação.

Incorpore decisões reutilizáveis na documentação canônica e registre a mudança no `CHANGELOG.md`. Observações específicas pertencem ao workspace ou ao arquivo histórico.
