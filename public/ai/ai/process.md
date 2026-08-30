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

## 3. Exploração visual

Gerar múltiplos estudos de direção genuinamente distintos antes de tentar fechar a peça final. Avaliar linguagem, composição, leitura, aderência à marca e potencial comercial sem exigir, nesta etapa, integração final de fotografias, embalagens, preços e acabamento de produção.

**Conceptual ≠ schematic.** Placeholders podem reduzir fidelidade factual, mas não devem transformar uma direção de arte em wireframe. Preserve o peso visual necessário para avaliar a composição e mantenha anotações de processo fora da peça dirigida ao consumidor.

Na exploração de Marketing, antes de desenhar containers, teste se o assunto pode gerar a composição por meio de massa, silhueta, escala, recorte, tipo, ritmo e espaço. Preserve nos placeholders a silhueta composicional conhecida sem inventar detalhes factuais. Esta orientação não se aplica como regra aos fluxos de UI.

Escolher uma direção de forma explícita e registrar quais decisões foram aprovadas. A partir desse ponto, essas decisões ficam congeladas e a exploração divergente termina, salvo reabertura explícita.

## 4. Produto por produto

Trabalhar CROC, SHAKE, SUNNY e CREMIX separadamente quando necessário. Validar fidelidade, embalagem, cor, forma, ingredientes, sabor, escala e recorte contra fontes de verdade, sem usar exploração visual para preencher fatos ausentes.

## 5. Composição comercial

Montar produto, naming, preço, hierarquia, branding, respiro e restrições legais somente depois que a direção estiver escolhida e os fatos necessários estiverem disponíveis.

## 6. Crítica por rodada

Revisar uma classe de problema de cada vez: fidelidade, direção de arte, hierarquia, legibilidade, consistência e acabamento. Refinar por feedback específico em vez de regenerar toda a peça. Se uma decisão congelada precisar mudar, reabri-la nominalmente e registrar o motivo.

## 7. Validação final

Primeiro, escolha e congele a direção candidata produzida sem acesso à resposta-alvo. Somente então, quando o objetivo incluir comparação de qualidade, consulte os [benchmarks de avaliação](../benchmarks/README.md). Compare impacto, hierarquia, desejo, ritmo, escala, profundidade e integração sem copiar o layout nem tratar benchmark como nova fonte factual.

Comparar também o resultado com fatos imutáveis, referências reais permitidas e [checklist de entrega](delivery-checklist.md). A aprovação humana deve ser registrada em `docs/decisions/` quando estabelecer ou alterar uma regra reutilizável.
