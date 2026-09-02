# Processo criativo com IA

Status: ativo
Última revisão: 2026-09-02

Este documento é o workflow para criação, continuação e execução com IA. Ele não substitui o [contexto essencial](brand-context.md), os guides de canal nem o brief do trabalho.

## Princípios operacionais

**Exploration ≠ Execution.** Antes da escolha, procure hipóteses realmente distintas e invista em comparação visual. Depois da escolha, preserve a direção e concentre esforço em refinamento e produção.

**Creative prompting ≠ quality review.** Durante exploração, a instrução de criação deve proteger os fatos e abrir uma hipótese composicional clara, não antecipar todo o checklist de aprovação. Catálogos completos de tokens, listas extensas de proibições e critérios de revisão simultâneos empurram a geração para soluções defensivas. Selecione a paleta aplicável, declare poucos bloqueios críticos e descreva positivamente a tensão visual que deve ser explorada. Aplique o quality gate depois que a candidata existir.

**Low finish is acceptable. Low evaluability is not.** Uma direção pode ter acabamento provisório, mas precisa permitir julgamento real de composição, hierarquia, desejo, ritmo, escala, mensagem, identidade, relação produto/tipo e uso do espaço.

**Product, typography and commercial message must enter the composition together.** Durante exploração e direção de arte validável de qualquer aplicação visual não-UI, a primeira materialização já integra subject, naming, preço ou mensagem, tipografia, branding e ambiente no canvas final.

**The truth must be present while the environment is created.** Não existe etapa independente de background: não gere, aprove ou reutilize cenário vazio, superfície abstrata ou ambiente isolado para receber os elementos depois. A proibição continua válida quando a ferramenta descreve o background como camada, máscara, passagem generativa ou asset intermediário. Se ela não consegue construir o ambiente dentro da composição completa, preservando os assets factuais visíveis, use outro fluxo ou outra ferramenta.

**Typography is also a subject.** Naming, preço e mensagem precisam ter geometria definida antes da criação do ambiente: posição, largura, escala, quebras, inclinação e relação com os demais subjects participam da hipótese desde o início. Quando a ferramenta generativa não carregar Outfit, componha o texto exato externamente e insira-o como SVG ou PNG transparente bloqueado na composição inicial. Rasterizar a tipografia oficial não é aproximá-la; gerar letras parecidas ou encaixar texto em um cenário pronto é.

Se a entrega final exigir texto editável, reconstrua-o em Outfit fora do modelo preservando exatamente a geometria que condicionou o ambiente. A troca técnica não pode reabrir layout, fluxo ou hierarquia.

Essa regra não se aplica a interfaces funcionais, nas quais superfícies e fundos cumprem funções de navegação, organização e estado conforme o guide de UI.

**A liberdade criativa diminui conforme aumenta a importância factual.** Logo, produto, embalagem, naming, preço, ingredientes e textos aprovados têm liberdade praticamente nula. Composição, fundo, luz, enquadramento, ritmo e formas de apoio podem ser explorados dentro da marca e do canal.

**Missing factual assets should constrain fidelity, not stop exploration.** Marque a ausência e verifique se ela é indispensável para a decisão atual. Se não for, continue com representação claramente conceitual. Se for, solicite o asset. Nunca substitua ausência factual por invenção.

Decisões aprovadas ficam **congeladas**. Não as reinterprete, combine ou reabra sem instrução explícita.

## 1. Enquadrar o trabalho

Identifique canal, formato, objetivo, conteúdo, prioridade, estágio e entrega. Preencha o [creative brief](../templates/creative-brief.md) e carregue apenas a documentação canônica necessária.

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

Defina direções distintas antes da materialização, mas desenvolva uma hipótese por geração ou por prompt independente. Não peça à mesma geração que resolva simultaneamente várias direções, todos os mecanismos composicionais e todo o checklist. A diversidade vem de hipóteses claras, não do acúmulo de comandos.

A saída não é PDF final, arquivo de impressão, pacote de produção, coleção de layers, background isolado, moodboard, wireframe ou estudo de ambiente separado. Imperfeições de acabamento são aceitáveis quando a ideia permanece julgável.

Durante esta etapa, não consulte os benchmarks de avaliação em `benchmarks/`.

### 3.2 Direção de arte validável

O objetivo é permitir escolha real entre direções. Entregue uma peça visual completa por direção, com proporção ou dimensão correta e fidelidade suficiente para julgar a hipótese.

O primeiro visual avaliável integra produto, tipografia, naming, preço ou mensagem, grafismos, espaço negativo e ambiente. Subject, tipo e conteúdo comercial determinam juntos escala, crop, overlap, hierarquia e planos; o background não precede essas relações.

Gerar um ambiente genérico e inserir os produtos depois não atende a este estágio, mesmo que o arquivo apresentado contenha todos os elementos obrigatórios. Presença final não comprova integração de origem: o ambiente precisa ter sido construído em resposta à composição específica.

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

1. nenhum background isolado foi gerado, aprovado ou reutilizado em qualquer momento;
2. o ambiente depende das relações específicas entre produto, tipo e mensagem;
3. os produtos participam da estrutura em vez de apenas ocupar uma superfície pronta;
4. naming e preço participam da composição em vez de funcionar somente como legendas;
5. as direções diferem por hipóteses estruturais, não apenas pelo ambiente.

Se algum dos quatro primeiros critérios falhar, ou se as diferenças forem superficiais, a direção ainda não está pronta para apresentação.

Incorpore decisões reutilizáveis na documentação canônica e registre a mudança no `CHANGELOG.md`. Observações específicas pertencem ao workspace ou ao arquivo histórico.
