# Processo criativo com IA

Status: ativo
Última revisão: 2026-08-30

## Roteamento antes da criação

1. Identifique o canal e o objetivo principal da entrega.
2. Carregue [Essência da marca](../foundations/brand-essence.md), [Fontes de verdade](../foundations/sources-of-truth.md) e os demais fundamentos aplicáveis.
3. Carregue o guide específico do canal: [Marketing e criação comercial](../marketing/principles.md) e [Princípios de direção de arte](../marketing/art-direction.md) para peças que comunicam ou vendem; [Produto e UI](../ui/principles.md) para interfaces funcionais.
4. Identifique o nível de maturidade visual e a etapa atual do processo.
5. Separe o que é imutável, explorável e pendente.
6. Aplique a fidelidade compatível com a etapa sem importar a gramática de outro canal.

**Brand foundations define identity. Channel guides define behavior.** Quando houver conflito, os requisitos do meio prevalecem sobre padrões genéricos de aplicação.

## Princípios do processo

**Exploration ≠ Execution.** Na exploração, o objetivo é produzir diversidade real entre direções e tornar escolhas visíveis. Depois que uma direção é escolhida, o objetivo muda para fidelidade, preservação e acabamento.

Decisões aprovadas ficam **congeladas**. A IA não deve reinterpretá-las em rodadas posteriores, salvo quando a decisão for explicitamente reaberta. Feedback específico deve alterar apenas o que foi apontado.

A liberdade criativa deve diminuir conforme aumenta a importância factual. Logo, produto, embalagem, preço, naming, ingredientes e demais fatos reais têm liberdade criativa praticamente nula. Composição, fundo, luz, enquadramento e formas de apoio podem ter maior liberdade quando o briefing permitir. As listas canônicas de elementos imutáveis e exploráveis estão no [contrato de prompt](prompt-contract.md) e em [fidelidade de produtos e embalagens](../products/product-fidelity.md).

Não peça à IA para resolver simultaneamente várias decisões criativas ainda abertas. Separe direção de arte, escolha de direção, fidelidade factual, composição comercial e acabamento em rodadas com critérios próprios.

**Generation creates the environment. Composition inserts the truth.** Modelos generativos podem criar fundo, cenografia, luz, enquadramento, ritmo, formas de apoio e atmosfera. Assets oficiais ou factuais devem entrar depois como elementos de composição, usando seus arquivos de origem; não devem ser reconstruídos dentro da imagem gerada.

Quando logo, wordmark, rótulo, texto impresso ou outro asset oficial influencia peso, posição, contraste, respiro ou hierarquia, use o arquivo oficial já durante a validação da direção de arte. Não remova automaticamente o logo de um estudo conceitual quando sua presença for necessária para avaliar a composição. A regra é **não gerar o logo**, e não “não usar logo”.

**Missing factual assets should constrain fidelity, not stop exploration.** A ausência de assets factuais deve limitar a fidelidade, não interromper a exploração criativa. Não trate toda pendência como bloqueio automático: diferencie “não posso validar fidelidade” de “não posso continuar explorando”.

Ao encontrar um asset ausente:

1. Marque-o como pendente e verifique se é indispensável para a decisão criativa da etapa atual.
2. Se não for indispensável, continue a direção conceitual com placeholder neutro ou representação claramente conceitual, preservando espaço para a fonte real.
3. Se for indispensável para validar a decisão, solicite o asset antes de avançar essa validação.

Nunca substitua uma ausência factual por invenção. Uma resposta adequada é: “Ainda não tenho fotografias oficiais suficientes para validar produto e embalagem. Posso, porém, continuar com estudos de direção conceitual usando placeholders neutros e preservar áreas para os assets reais.”

## Níveis de maturidade visual

### 1. Direção conceitual

Pode avançar com placeholders neutros quando os fatos reais ainda não forem necessários para avaliar a direção. O estudo deve permanecer identificado como conceitual e não valida fidelidade.

### 2. Direção de arte validável

Deve usar assets oficiais reais quando eles influenciarem a decisão visual, como logo e textos aprovados. O ambiente ainda pode ser explorado, mas a validação não pode depender de uma reconstrução generativa de fonte de verdade.

### 3. Execução final

Deve usar fontes de verdade para produto, embalagem, logo, preço, textos e demais fatos reais. Nenhum placeholder ou aproximação pode ser apresentado como conteúdo final.

## 1. Briefing factual

Reunir objetivo, formato, canal, público, produtos, naming, preços, textos, logos, fotografias, embalagens, restrições e decisão sobre mascote. Classificar o que é imutável, explorável e pendente antes de criar.

## 2. Referência de direção

Classificar cada entrada como [mood reference, brand reference ou source of truth](../references/types.md). Registrar o que uma referência de direção exemplifica — ritmo, paleta, peso das formas, hierarquia, luz, respiro e relação entre produto e grafismo — sem pedir apenas para “copiar o estilo”.

Antes da exploração, consultar apenas referências gerais relevantes do canal na [biblioteca](../references/library.md), quando existirem. **Rules constrain. References calibrate.** Referências ajudam a reconhecer quality bar, ritmo, escala e impacto, mas não substituem briefing, fontes de verdade, regras de marca ou decisões homologadas. Uma referência aprovada não autoriza copiar literalmente sua composição.

Não consulte `docs/benchmarks/` durante briefing ou exploração. **A benchmark evaluates quality after creation; it must not leak the target solution into exploration.** Benchmark é ferramenta de avaliação, não creative input ou briefing.

## Art Direction Readiness

Antes da exploração visual comparável, aplique dois gates obrigatórios.

### Brand readiness

Confirme canal, paleta, naming, regras de identidade, linguagem gráfica e os assets imutáveis necessários para avaliar a etapa. Outfit é a tipografia oficial e não pode ser substituída silenciosamente por aproximação. **Immutable brand elements must not be approximated merely to complete a concept.**

Se a ferramenta generativa não preservar texto, tipografia ou logo corretamente, gere o ambiente sem esses elementos finais e componha depois os assets oficiais, ou use uma ferramenta capaz de preservá-los. **Generation may create the environment; composition must preserve the identity.**

### Subject readiness

Pergunte: **Do I have enough subject fidelity to evaluate the art direction?** Para Marketing orientado a produto, identifique se source of truth, asset real provisório, referência representativa ou proxy sintético controlado preserva categoria visual, silhueta, massa e presença suficientes. **When the subject is visually determinant, abstract placeholders are not sufficient for art-direction validation.**

Se um insumo essencial estiver ausente, resolva o problema de entrada antes de compensar com invenção visual sem relação. Solicite o asset, procure representação adequada, produza proxy controlado ou mantenha o estudo como exploração inicial incompleta.

Somente quando marca, assunto, canal e representação permitirem avaliar desejo, hierarquia e composição a etapa passa de exploração inicial para direção de arte validável.

## 3. Exploração visual

Gerar de três a quatro estudos de direção genuinamente distintos antes de tentar fechar a peça final. Em trabalhos de Marketing com espaço real de exploração, prefira quatro direções como conjunto inicial padrão. Tarefas simples podem justificar menos, e casos excepcionais podem exigir outra abordagem; o número não substitui julgamento criativo.

Cada direção deve ter uma hipótese composicional própria, conforme os [princípios de direção de arte](../marketing/art-direction.md). Quatro cores, rearranjos superficiais dos mesmos blocos ou pequenas mudanças de escala na mesma arquitetura contam como variantes, não como direções distintas.

Antes da rodada, identifique quais assets são visualmente determinantes, o nível de representação necessário para comparar as hipóteses, quais sources of truth estão disponíveis e onde será necessário usar asset provisório, referência representativa ou proxy claramente identificado. Não construa a comparação com placeholders abstratos inadequados quando presença ou silhueta de produto determinar a decisão.

As propostas não precisam de acabamento final, mas devem permitir comparar impacto, hierarquia, desejo, escala, composição, presença do produto, legibilidade e relação entre elementos. **Low finish is acceptable. Low evaluability is not.**

Explore internamente quantas tentativas forem necessárias sem impor um número fixo. Rejeite ou regenere opções fracas antes da rodada apresentada. **Do not present four directions merely because they are different.** Cada candidata deve passar individualmente pelo quality gate: aderência à marca e ao canal, avaliabilidade, plausibilidade comercial, fidelidade suficiente ao assunto, distinção das demais e defesa como direção de arte — não apenas experimento gráfico.

Apresente cada direção aprovada pelo gate de forma breve, com nome, hipótese, principal mecanismo composicional, prioridade, riscos e imagem ou estudo correspondente. A imagem é a principal evidência. Depois, compare qualitativamente adequação ao canal, força comercial, desejo, protagonismo do produto, clareza, originalidade, aderência à marca, potencial de refinamento, risco de virar UI, catálogo ou infografia e dependência de assets indisponíveis. Não exija pontuação matemática.

As opções apresentadas devem estar **good enough to compare**. **Four is a presentation target, not a quality substitute.** Se ainda não houver quatro candidatas viáveis, continue a exploração interna ou explique por que a rodada não está pronta; não reduza o quality floor para preencher slots.

**Conceptual ≠ schematic.** Placeholders podem reduzir fidelidade factual, mas não devem transformar uma direção de arte em wireframe. Preserve o peso visual necessário para avaliar a composição e mantenha anotações de processo fora da peça dirigida ao consumidor.

Na exploração de Marketing, antes de desenhar containers, teste se o assunto pode gerar a composição por meio de massa, silhueta, escala, recorte, tipo, ritmo e espaço. Preserve nos placeholders a silhueta composicional conhecida sem inventar detalhes factuais. Esta orientação não se aplica como regra aos fluxos de UI.

Primeiro compare; depois escolha uma direção, registre o que foi aprovado e congele essas decisões. Só então invista em fidelidade e refinamento. Não misture automaticamente “o melhor de cada direção”; qualquer combinação deve ser uma decisão explícita. A exploração divergente termina após a escolha, salvo reabertura explícita.

Nesta etapa, valide o método criativo antes de otimizar custo ou tokens. Eficiência pode ser revista futuramente, depois que qualidade e consistência estiverem demonstradas.

## 4. Produto por produto

Trabalhar CROC, SHAKE, SUNNY e CREMIX separadamente quando necessário. Validar fidelidade, embalagem, cor, forma, ingredientes, sabor, escala e recorte contra fontes de verdade, sem usar exploração visual para preencher fatos ausentes.

## 5. Composição comercial

Montar produto, naming, preço, hierarquia, branding, respiro e restrições legais somente depois que a direção estiver escolhida e os fatos necessários estiverem disponíveis.

## 6. Crítica por rodada

Revisar uma classe de problema de cada vez: fidelidade, direção de arte, hierarquia, legibilidade, consistência e acabamento. Refinar por feedback específico em vez de regenerar toda a peça. Se uma decisão congelada precisar mudar, reabri-la nominalmente e registrar o motivo.

## 7. Validação final

Primeiro, escolha e congele a direção candidata produzida sem acesso à resposta-alvo. Somente então, quando o objetivo incluir comparação de qualidade, consulte os [benchmarks de avaliação](../benchmarks/README.md). Compare impacto, hierarquia, desejo, ritmo, escala, profundidade e integração sem copiar o layout nem tratar benchmark como nova fonte factual.

Comparar também o resultado com fatos imutáveis, referências reais permitidas e [checklist de entrega](delivery-checklist.md). A aprovação humana deve ser registrada em `docs/decisions/` quando estabelecer ou alterar uma regra reutilizável.
