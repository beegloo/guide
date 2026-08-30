import { copyFile, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const docsRoot = path.join(root, 'docs')
const publicRoot = path.join(root, 'public')
const aiRoot = path.join(publicRoot, 'ai')
const brandRoot = path.join(publicRoot, 'brand')

const walk = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map(async (entry) => {
    const absolute = path.join(directory, entry.name)
    return entry.isDirectory() ? walk(absolute) : absolute
  }))
  return files.flat().sort()
}

const allFiles = await walk(docsRoot)
const markdownFiles = allFiles.filter((file) => file.endsWith('.md'))
const colors = JSON.parse(await readFile(path.join(docsRoot, 'tokens/colors.json'), 'utf8'))
const statusValues = { oficial: 'official', ativo: 'active', exploratório: 'exploratory', pendente: 'pending', substituído: 'superseded' }
const statusLabels = { official: 'oficial', active: 'ativo', exploratory: 'exploratório', pending: 'pendente', superseded: 'substituído' }
const categoryTitles = { general: 'Visão geral', foundations: 'Fundamentos', identity: 'Identidade', products: 'Produtos', photography: 'Fotografia', commercial: 'Comercial', applications: 'Aplicações', ai: 'Inteligência artificial', references: 'Referências', decisions: 'Decisões' }
const categoryOrder = ['general', 'foundations', 'identity', 'products', 'photography', 'commercial', 'applications', 'ai', 'references', 'decisions']

await rm(aiRoot, { recursive: true, force: true })
await rm(brandRoot, { recursive: true, force: true })
await mkdir(aiRoot, { recursive: true })
await mkdir(path.join(brandRoot, 'logos'), { recursive: true })

const logoAliases = {
  'primary.svg': 'Padrão.svg',
  'on-color.svg': 'Sobre.svg',
  'icon-blue.svg': 'Ícone Azul.svg',
  'icon-pink.svg': 'Ícone Rosa.svg',
}

await Promise.all(Object.entries(logoAliases).map(([alias, source]) => copyFile(
  path.join(publicRoot, 'logos', 'display', source),
  path.join(brandRoot, 'logos', alias),
)))

const sections = []
const documents = []
for (const source of markdownFiles) {
  const relative = path.relative(docsRoot, source)
  const content = await readFile(source, 'utf8')
  const destination = path.join(aiRoot, relative)
  await mkdir(path.dirname(destination), { recursive: true })
  await writeFile(destination, content)
  sections.push(`<!-- source: docs/${relative} -->\n\n${content.trim()}`)
  const title = content.match(/^#\s+(.+)$/m)?.[1] ?? path.basename(relative, '.md')
  const statusLabel = content.match(/^Status:\s*([^\n]+)/mi)?.[1]?.trim() ?? 'ativo'
  const status = statusValues[statusLabel.toLocaleLowerCase('pt-BR')] ?? 'active'
  const lastReviewed = content.match(/^Última revisão:\s*([^\n]+)/mi)?.[1]?.trim() ?? null
  documents.push({
    path: relative.split(path.sep).join('/'),
    title,
    category: relative.includes(path.sep) ? relative.split(path.sep)[0] : 'general',
    status,
    lastReviewed,
    source: `/ai/${relative.split(path.sep).join('/')}`,
  })
}

const documentIndex = categoryOrder.flatMap((category) => {
  const categoryDocuments = documents.filter((document) => document.category === category)
  if (categoryDocuments.length === 0) return []
  return [`### ${categoryTitles[category]}`, ...categoryDocuments.map((document) => `- [${document.title}](${document.source}) — ${statusLabels[document.status]}`), '']
}).join('\n')

const llms = `# Beegloo Brand Guide

> Fonte oficial de contexto para pessoas e agentes de IA. Leia o contexto essencial antes de iniciar qualquer trabalho e consulte as fontes específicas quando necessário.

## Comece aqui

- [Contexto portátil completo](/ai/ai/brand-context.md)
- [Fontes de verdade e precedência](/ai/foundations/sources-of-truth.md)
- [Contrato de prompt](/ai/ai/prompt-contract.md)
- [Checklist de entrega](/ai/ai/delivery-checklist.md)
- [Catálogo e pendências de produto](/ai/products/catalog.md)
- [Contexto integral em um arquivo](/llms-full.txt)
- [Manifesto estruturado JSON](/brand-context.json)
- [Documentação para pessoas](/docs)

## Documentos disponíveis

${documentIndex}

## Assets oficiais

- [Assinatura padrão](/brand/logos/primary.svg)
- [Assinatura sobre cor](/brand/logos/on-color.svg)
- [Ícone azul](/brand/logos/icon-blue.svg)
- [Ícone rosa](/brand/logos/icon-pink.svg)
`

const manifest = {
  schemaVersion: '1.0',
  brand: 'Beegloo',
  language: 'pt-BR',
  lastReviewed: '2026-08-30',
  entrypoints: { concise: '/llms.txt', complete: '/llms-full.txt', human: '/', humanDocs: '/docs?doc=ai/brand-context.md#docs' },
  authorityOrder: [
    'approved-asset-or-document',
    'current-approved-commercial-brief',
    'official-product-catalog',
    'brand-guide',
    'previously-approved-work',
    'conceptual-reference',
    'ai-generated-output',
  ],
  officialLogos: ['/brand/logos/primary.svg', '/brand/logos/on-color.svg', '/brand/logos/icon-blue.svg', '/brand/logos/icon-pink.svg'],
  typography: { primary: 'Outfit' },
  colors,
  knownProductFamilies: ['CROC', 'SHAKE', 'SUNNY', 'CREMIX'],
  productCatalogStatus: 'pending',
  mascotAssetStatus: 'missing',
  invariants: [
    'Never recreate or modify official logos.',
    'Never infer product, packaging, naming, flavor, price, or legal facts.',
    'AI output is not an official reference without explicit human approval.',
  ],
  documents: markdownFiles.map((file) => `/ai/${path.relative(docsRoot, file).split(path.sep).join('/')}`),
  documentIndex: documents,
}

await writeFile(path.join(publicRoot, 'llms.txt'), llms)
await writeFile(path.join(publicRoot, 'llms-full.txt'), `# Beegloo Brand Guide — contexto integral\n\n${sections.join('\n\n---\n\n')}\n`)
await writeFile(path.join(publicRoot, 'brand-context.json'), `${JSON.stringify(manifest, null, 2)}\n`)
await writeFile(path.join(publicRoot, 'docs-index.json'), `${JSON.stringify({ generatedAt: new Date().toISOString(), documents }, null, 2)}\n`)
