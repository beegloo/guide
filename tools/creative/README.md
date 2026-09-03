# Ferramenta de geração criativa

Este diretório contém o executor local usado pelo workflow criativo da Beegloo. Ele valida uma solicitação JSON, envia prompt e assets reais ao endpoint de edição de imagens e registra a rodada. Não contém regras da marca e não substitui o Guide nem as skills.

## Configuração local

Copie `.env.example` para `.env` e preencha `OPENAI_API_KEY`. O `.env` e as rodadas em `creative-runs/` não são versionados.

## Solicitação

Crie um JSON compatível com `request.schema.json`. Caminhos de assets podem ser absolutos, relativos ao arquivo da solicitação ou relativos à raiz do repositório.

Valide sem chamar a API:

```sh
npm run creative -- --config /path/to/request.json --print-prompt
```

Depois de revisar prompt, assets, textos permitidos e custo esperado, execute:

```sh
npm run creative -- --config /path/to/request.json --execute
```

A execução paga exige autorização explícita para o envio dos assets indicados. Cada rodada salva `output.png`, `source.png`, `prompt.txt`, `request.json`, `generation.json` e, quando usada, `mask.png`.

## Responsabilidades

- O Guide define marca, canal, fatos e processo.
- A skill compila o briefing e escolhe o contexto necessário.
- Esta ferramenta valida, transporta e registra a requisição.
- O workspace da execução preserva brief, handoff e direção congelada.

Uma máscara restringe a intenção da edição, mas não garante preservação pixel a pixel fora da área. Para texto, preço, logo e outros fatos finais, prefira composição determinística quando a fidelidade absoluta for necessária.
