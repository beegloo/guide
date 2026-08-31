# Handoffs criativos

Status: ativo
Última revisão: 2026-08-30

Handoff criativo é o estado operacional portátil de uma peça em andamento. Ele permite que outro agente continue o trabalho sem histórico do chat, memória da sessão ou arquivos privados da execução anterior.

**A frozen direction must be portable.** **State must live in artifacts, not only in conversation.** Nomes como “Direção 01”, “Opção 2”, “a escolhida” ou “a anterior” não identificam uma direção sozinhos.

## Onde vive

- Um handoff por trabalho ou direção ativa em `docs/handoffs/`.
- Referências visuais específicas em `public/assets/handoffs/<project>/<direction>/`, quando existirem.
- Assets oficiais continuam em suas áreas canônicas; o handoff apenas aponta para eles.
- Working proxies continuam provisórios e são referenciados, não duplicados.

Use [_template.md](_template.md) para novos registros. Um handoff sem referência visual, frozen/adjustable ou maturidade declarada está incompleto e não autoriza refinamento.

## Descoberta e ciclo de vida

Antes de continuar um trabalho existente, procure aqui um handoff com estado `active`. Leia-o antes do case study ou da conversa anterior.

Após escolher uma direção:

1. dê nome descritivo à direção;
2. salve ou referencie sua imagem;
3. registre hipótese e objetivo;
4. separe frozen de adjustable;
5. liste assets, readiness, conteúdo, pendências e próximos passos;
6. marque o handoff como `active` somente quando estiver autossuficiente;
7. atualize-o a cada mudança de estado relevante.

Ao finalizar, substituir ou abandonar o trabalho, altere o estado operacional e aponte para o sucessor quando houver. Preserve o histórico necessário sem transformar o handoff em regra institucional.

## Limites de autoridade

Handoff não é source of truth de marca, catálogo factual, benchmark ou decisão reutilizável. Ele registra o estado de uma execução específica. `docs/decisions/` permanece reservado à memória institucional; fatos e assets continuam subordinados às fontes canônicas.

**Do not rely on chat memory to preserve creative decisions.** Se uma informação necessária existe apenas na conversa, ela ainda não foi entregue ao próximo agente.

## Handoffs ativos

Nenhum handoff autossuficiente está ativo atualmente. A antiga “Direção 01” do menu board não pode ser reconstruída porque sua referência visual e descrição congelada não foram preservadas no repositório.
