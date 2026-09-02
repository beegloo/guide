# Sistema tipográfico

Status: ativo
Última revisão: 2026-08-30

Outfit é a família tipográfica principal.

## Papéis iniciais

- Display: pesos 700–800.
- Títulos: pesos 600–700.
- Nomes de produto: pesos 700–800.
- Preços: pesos 700–800.
- Texto: pesos 400–500.
- Legendas: pesos 500–600.
- Informações legais: pesos 400–500.

## Regras

- Usar hierarquia clara e poucos níveis por composição.
- Evitar linhas longas em texto corrido.
- Aplicar caixa alta somente quando houver função de categoria, legenda ou sinalização.
- Tratar números e preços como informação comercial, não como ornamento.
- Garantir contraste e legibilidade no tamanho final de uso.

## Ferramentas sem suporte à fonte

Quando uma ferramenta generativa não puder carregar Outfit, componha o texto exato fora dela e use SVG ou PNG transparente como asset bloqueado. Esse asset deve participar da composição desde o início, com posição, largura, escala, quebras e inclinação já definidas enquanto o ambiente é construído.

Rasterização preserva a identidade tipográfica quando parte da Outfit verdadeira. Aproximação generativa não preserva. Se a entrega exigir editabilidade, mantenha ou reconstrua a camada editável em Outfit na mesma geometria; não encaixe o texto depois em um ambiente já resolvido.

## Pendente

- Escala tipográfica por aplicação.
- Entrelinha e tracking por papel.
- Largura máxima formal de linha.
- Substituta técnica quando Outfit não estiver disponível.
