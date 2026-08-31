# Workflow criativo com IA

> Bundle gerado. Edite apenas as fontes indicadas em cada seção.

<!-- source: docs/ai/process.md -->

# Processo criativo com IA

Status: ativo
Última revisão: 2026-08-31

Este documento é um workflow carregado quando houver criação, continuação ou execução com IA. Ele não substitui o [contexto essencial](brand-context.md), os guides de canal nem o brief do trabalho.

## Princípios operacionais

**Exploration ≠ Execution.** Na exploração, procure hipóteses realmente distintas. Depois da escolha, preserve a direção e refine com fidelidade.

**A liberdade criativa diminui conforme aumenta a importância factual.** Logo, produto, embalagem, naming, preço, ingredientes e textos aprovados têm liberdade praticamente nula. Composição, fundo, luz, enquadramento, ritmo e formas de apoio podem ser explorados dentro da marca e do canal.

**Generation creates the environment. Composition inserts the truth.** Modelos generativos podem criar o ambiente, mas fontes de verdade entram por composição. A regra é não gerar o logo ou outro asset oficial — não deixar de usá-lo quando ele for necessário para avaliar a peça.

**Missing factual assets should constrain fidelity, not stop exploration.** Marque a ausência e verifique se ela é indispensável para a decisão atual. Se não for, continue com placeholder neutro ou representação claramente conceitual. Se for, solicite o asset. Nunca substitua ausência factual por invenção.

Decisões aprovadas ficam **congeladas**. Não as reinterprete, combine ou reabra sem instrução explícita.

## 1. Enquadrar o trabalho

Identifique canal, formato, objetivo, conteúdo, prioridade e entrega. Preencha o [creative brief](../templates/creative-brief.md) e carregue apenas o bundle de contexto adequado.

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

Uma pendência pode impedir validação de fidelidade sem impedir exploração. Declare claramente qual das duas está limitada.

Use [mood, brand e source of truth](../references/types.md) com papéis distintos. Referências calibram qualidade; não prescrevem a solução.

## 3. Explorar direções

Explore diversidade estrutural antes do acabamento. Cada direção deve testar uma hipótese diferente de hierarquia, escala, ritmo, profundidade, produto, tipografia e espaço — não apenas trocar cor ou decoração.

Todas as opções apresentadas precisam superar o mesmo piso de marca, assunto e qualidade. Quantidade não compensa propostas fracas.

Durante esta etapa, não consulte [benchmarks de avaliação](../benchmarks/README.md).

## 4. Escolher e congelar

Registre a direção escolhida, sua imagem de referência, decisões congeladas, elementos ajustáveis, assets, conteúdo vigente, pendências e próximo passo em um [creative handoff](creative-handoff.md) dentro do workspace do trabalho.

A partir daí, feedback deve ser específico. Evite regeneração total quando um ajuste localizado resolver o problema.

## 5. Executar com fontes de verdade

Trabalhe segundo a maturidade visual:

1. **Direção conceitual:** placeholders são permitidos quando fatos reais ainda não determinam a decisão.
2. **Direção de arte validável:** use assets oficiais quando peso, posição, contraste, respiro ou hierarquia dependem deles.
3. **Execução final:** produto, embalagem, logo, preço, textos e demais fatos devem vir de fontes de verdade.

Preserve assuntos estáveis e concentre a liberdade no que permanece explorável. Para produtos e proxies, siga [fidelidade de produto](../products/product-fidelity.md).

## 6. Avaliar e entregar

Aplique o [checklist de entrega](delivery-checklist.md). Depois que uma direção candidata estiver criada e congelada, benchmarks podem entrar como holdout de avaliação, nunca como resposta-alvo.

Registre decisões reutilizáveis em `docs/decisions/`. Observações de um trabalho específico pertencem ao case study ou ao workspace desse trabalho e só viram regra após validação explícita.

---

<!-- source: docs/references/types.md -->

# Tipos de referência

Status: ativo
Última revisão: 2026-08-30

Classifique cada referência antes de iniciar uma exploração. O tipo define o que pode ser interpretado e o que deve ser preservado.

## Mood reference

Inspira atmosfera, ritmo, energia, composição e nível de acabamento. Deve ser traduzida para o sistema Beegloo, não copiada literalmente. Não autoriza reproduzir identidade, produto ou elementos proprietários de outra peça.

## Brand reference

Define identidade, paleta, tipografia, linguagem visual e comportamento da marca. Deve ser aplicada de acordo com seu status e com a [ordem de precedência das fontes](../foundations/sources-of-truth.md).

## Source of truth

Representa um fato real que deve ser preservado fielmente, como logo oficial, produto, embalagem, fotografia real, preço aprovado ou especificação. Uma source of truth nunca deve ser tratada apenas como inspiração visual, estilizada para combinar com um mood ou substituída por uma aproximação.

Quando uma mesma entrega contiver os três tipos, mantenha seus papéis separados: o mood orienta direção, a brand reference orienta identidade e a source of truth limita a execução factual.

## Benchmark não é tipo de referência

Um benchmark é um holdout usado para avaliar qualidade depois da criação. Ele não deve ser classificado como creative input nem carregado durante exploração. Mood reference, brand reference e source of truth orientam ou limitam o trabalho; [benchmarks](../benchmarks/README.md) medem posteriormente uma direção já produzida e congelada.

---

<!-- source: docs/ai/delivery-checklist.md -->

# Checklist de entrega

Status: ativo
Última revisão: 2026-08-31

Use este checklist como quality gate. As regras completas permanecem nos documentos vinculados.

## Fontes e identidade

- [ ] Logo veio de arquivo oficial; não foi reconstruído ou alterado.
- [ ] Outfit, paleta e demais invariantes foram preservados.
- [ ] Naming, preço, textos e fatos vieram de fontes com autoridade adequada.
- [ ] Assets oficiais necessários para validar peso, posição, contraste e hierarquia foram inseridos por composição.

## Assunto e conteúdo

- [ ] Produto, embalagem ou proxy preserva silhueta, proporções e detalhes factuais conhecidos.
- [ ] Nenhuma ausência factual foi substituída por invenção.
- [ ] Pendências indispensáveis bloquearam apenas a validação afetada; as demais não interromperam a exploração.
- [ ] O nível de maturidade — conceitual, validável ou final — está declarado.

## Canal e qualidade

- [ ] O guide do canal foi aplicado sem importar automaticamente padrões de outro meio.
- [ ] Brand, subject e quality readiness foram confirmadas.
- [ ] Em Marketing, há ideia visual, desejo, impacto e integração entre produto, tipografia e espaço.
- [ ] A hierarquia e a leitura atendem à distância e ao contexto real de uso.
- [ ] Formas, containers, crops, overlaps e assimetrias cumprem uma intenção clara.

## Processo e entrega

- [ ] Direções comparadas testam hipóteses estruturais distintas, não variantes cosméticas.
- [ ] Tentativas abaixo do piso comum de qualidade não foram apresentadas apenas para completar quantidade.
- [ ] A direção escolhida foi congelada antes da execução.
- [ ] O [creative handoff](creative-handoff.md) registra imagem, frozen, adjustable, fontes, pendências e próximo passo.
- [ ] Outro agente consegue continuar sem depender do histórico da conversa.
- [ ] Benchmarks, quando usados, só foram abertos depois da criação e do congelamento.
- [ ] Aprovações e decisões reutilizáveis foram registradas no lugar correto.

---

<!-- source: docs/ai/creative-handoff.md -->

# Protocolo de handoff criativo

Status: ativo
Última revisão: 2026-08-31

Handoff criativo é o estado operacional portátil de uma peça em andamento. Ele permite que outro agente continue o trabalho sem histórico do chat, memória da sessão ou arquivos privados da execução anterior.

**A frozen direction must be portable.** **State must live in artifacts, not only in conversation.** Nomes como “Direção 01”, “Opção 2”, “a escolhida” ou “a anterior” não identificam uma direção sozinhos.

**The guide defines the handoff protocol. The working project stores the handoff instance.** Este documento ensina quando criar o handoff, quais campos registrar e como continuar o trabalho. A instância, sua imagem, versões, conteúdo temporário e próximos passos pertencem ao workspace ou repositório da execução concreta — não ao Brand Guide.

## Momento de criação

Crie ou atualize o handoff no momento da escolha:

1. escolha a direção;
2. congele as decisões aprovadas;
3. salve a referência visual escolhida no workspace da execução;
4. crie ou atualize o handoff daquele trabalho;
5. confirme que outro agente consegue continuar sem a conversa;
6. só então avance ao refinamento.

Em trabalhos visuais, a referência escolhida é obrigatória para um handoff ativo. O handoff aponta para o arquivo no workspace do trabalho; o Brand Guide não precisa possuir essa imagem.

## Frozen e adjustable

Frozen protege estrutura conceitual, hipótese composicional, lógica de hierarquia, relações principais, linguagem aprovada e demais decisões que definem a direção. Se uma alteração ameaçar um desses elementos, a decisão precisa ser explicitamente reaberta.

Adjustable permite microespaçamento, escala fina, crop, posição, refinamento tipográfico, integração de conteúdo, luz e acabamento quando essas mudanças não alteram a direção. Congelar não significa congelar todos os pixels.

## Autoridade e ciclo de vida

Handoff não é source of truth de marca, catálogo factual, benchmark ou decisão institucional. Ele registra o estado temporário de uma execução e referencia assets canônicos em vez de duplicá-los.

`docs/decisions/` permanece reservado à memória institucional reutilizável. `docs/case-studies/` registra aprendizados de casos. O workspace do trabalho guarda handoffs ativos, imagens escolhidas, arquivos temporários e versões.

Atualize a instância a cada mudança relevante de estado. Ao finalizar, substituir ou abandonar o trabalho, marque seu estado e aponte para o sucessor quando houver.

## Template reutilizável

Copie a estrutura abaixo para o workspace da execução.

```md
# Handoff criativo — [project] — [direction name]

Operational state: draft | active | superseded | completed
Last updated: YYYY-MM-DD

- **Direction name:** nome descritivo; não usar apenas número ou posição.
- **Visual reference:** caminho para a imagem escolhida no workspace; obrigatório para `active` em trabalhos visuais.
- **Objective:** objetivo concreto da peça.
- **Channel:** canal e comportamento aplicável.
- **Format:** dimensões, proporção e suporte.
- **Current maturity:** direção conceitual | direção de arte validável | execução final.

## Short description

Descrição curta que permita reconhecer a direção sem a conversa original.

## Compositional hypothesis

Hipótese que define a direção e a distingue das alternativas.

## Frozen

- Registre decisões concretas de estrutura, hierarquia, relações e linguagem.
- Uma mudança nesta seção exige reabertura explícita.

## Adjustable

- Registre os refinamentos permitidos que não alteram a direção.

## Assets and proxies

Links para assets, logos, imagens e proxies usados, com status e função. Não duplique fontes canônicas.

## Readiness

- **Brand readiness:** ready | partial | blocked — justificativa.
- **Subject readiness:** ready | partial | blocked — justificativa.
- **Quality readiness:** ready | partial | blocked — justificativa.

## Current content

Naming, preços, textos e conteúdo vigente, com fonte e status.

## Pending

Lacunas factuais, assets ausentes, validações e decisões abertas.

## Next steps

Próximas ações em ordem, incluindo quality gate aplicável.

## Do not reopen

O que o próximo agente não deve explorar novamente sem decisão explícita.

## Related artifacts

Case study, decisão institucional, briefing ou handoff substituído, quando aplicável.
```

Um handoff sem nome descritivo, referência visual aplicável, frozen/adjustable ou maturidade declarada está incompleto e não autoriza refinamento.
