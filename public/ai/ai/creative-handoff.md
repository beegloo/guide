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
