---
name: creative-generator
description: Orquestra geração e refinamento de peças visuais Beegloo pela API local, incluindo preflight, autorização, execução, avaliação e registro. Use quando o usuário pedir ao Codex para criar, gerar, testar, adaptar ou editar uma arte Beegloo; não use quando ele quiser somente um prompt ou editar o Brand Guide.
---

# Beegloo Creative Generator

Conduza a produção visual como operador do workflow, não como fonte paralela de regras da marca. Use o Guide vigente para decisões e a ferramenta local somente para transporte e registro.

## Dependência de prompt

Use também `prompt-builder` para compilar o prompt autossuficiente. Quando o pedido for uma geração rápida ou light, mantenha a cápsula mínima definida nessa skill; não reduza o prompt a uma descrição estética genérica.

## Roteamento

1. Localize o Beegloo Guide aberto ou use `/home/joao/Code/beegloo-guide`.
2. Leia `AGENTS.md`, `docs/ai/brand-context.md`, `docs/foundations/sources-of-truth.md`, o guide do canal, os documentos do produto e `docs/ai/process.md`.
3. Para continuar uma direção, valide o handoff no workspace e leia `docs/ai/creative-handoff.md`.

Use por padrão o snapshot validado `gpt-image-2-2026-04-21`. Em exploração, comece com `quality: low`; aumente somente quando a direção aprovada exigir mais acabamento.

## Preparar a rodada

- Extraia canal, formato, objetivo, conteúdo aprovado, produtos, estágio e entrega.
- Separe imutáveis, exploráveis e pendentes. Não invente fatos para completar a solicitação.
- Se existir working reference válida, use-a como subject visual.
- Escolha uma hipótese composicional positiva por geração.
- Compile o prompt com `prompt-builder` e crie uma solicitação JSON compatível com `tools/creative/request.schema.json`.
- Use `allowedText` para conteúdo comercial fechado e descreva com precisão o papel de cada asset.
- Salve a solicitação fora de `docs/`, preferencialmente no workspace da execução ou em `/tmp`.

## Preflight obrigatório

Execute primeiro, sem custo:

```sh
npm run creative -- --config /path/to/request.json --print-prompt
```

Revise prompt, formato, modelo, qualidade, assets e whitelist. Não faça chamada externa no preflight.

## Autorização e execução

Antes de `--execute`, informe exatamente quais arquivos serão enviados, o destino, o modelo e que haverá cobrança. Obtenha autorização explícita para esse payload específico; autorização anterior não vale automaticamente para outra rodada.

Depois da aprovação:

```sh
npm run creative -- --config /path/to/request.json --execute
```

Não repita automaticamente uma chamada malsucedida ou insatisfatória. Inspecione o resultado, explique a falha e obtenha direção antes de nova geração paga.

## Avaliar e continuar

- Abra `output.png` e aplique o quality gate do Guide.
- Confirme conteúdo exato, fidelidade dos assets, canal, desejo, hierarquia e composição subject-first.
- Registre o caminho da rodada e apresente o resultado ao usuário.
- Quando aprovado, congele a direção em um handoff no workspace.
- Use máscara apenas para refinamento visual localizado. Ela não garante preservação pixel a pixel.
- Para logo, Outfit, preço e texto finais, use composição determinística quando a fidelidade absoluta for necessária.

As rodadas em `creative-runs/` são locais e não devem ser commitadas. Não publique, commite ou altere o Guide sem solicitação explícita.
