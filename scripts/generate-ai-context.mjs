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

await rm(aiRoot, { recursive: true, force: true })
await rm(brandRoot, { recursive: true, force: true })
await rm(path.join(publicRoot, 'llms-full.txt'), { force: true })
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

const documents = []
const contents = new Map()
for (const source of markdownFiles) {
  const relative = path.relative(docsRoot, source)
  const content = await readFile(source, 'utf8')
  const normalizedRelative = relative.split(path.sep).join('/')
  contents.set(normalizedRelative, content)
  const destination = path.join(aiRoot, relative)
  await mkdir(path.dirname(destination), { recursive: true })
  await writeFile(destination, content)
  const category = relative.includes(path.sep) ? relative.split(path.sep)[0] : 'general'
  const title = content.match(/^#\s+(.+)$/m)?.[1] ?? path.basename(relative, '.md')
  const statusLabel = content.match(/^Status:\s*([^\n]+)/mi)?.[1]?.trim() ?? 'ativo'
  const status = statusValues[statusLabel.toLocaleLowerCase('pt-BR')] ?? 'active'
  const lastReviewed = content.match(/^Última revisão:\s*([^\n]+)/mi)?.[1]?.trim() ?? null
  documents.push({
    path: normalizedRelative,
    title,
    category,
    status,
    lastReviewed,
    source: `/ai/${normalizedRelative}`,
  })
}

const bundleSpecs = {
  core: {
    title: 'Contexto essencial',
    paths: ['ai/brand-context.md', 'foundations/sources-of-truth.md'],
  },
  marketing: {
    title: 'Contexto de Marketing',
    paths: ['ai/brand-context.md', 'foundations/sources-of-truth.md', 'marketing/principles.md', 'marketing/art-direction.md'],
  },
  ui: {
    title: 'Contexto de Produto e UI',
    paths: ['ai/brand-context.md', 'foundations/sources-of-truth.md', 'ui/principles.md'],
  },
  'menu-board': {
    title: 'Contexto de menu board',
    paths: ['ai/brand-context.md', 'foundations/sources-of-truth.md', 'products/catalog.md', 'products/product-fidelity.md', 'marketing/principles.md', 'marketing/art-direction.md', 'marketing/menu-boards.md', 'marketing/commercial-hierarchy.md', 'marketing/pricing.md'],
  },
  workflow: {
    title: 'Workflow criativo com IA',
    paths: ['ai/process.md', 'references/types.md', 'ai/delivery-checklist.md', 'ai/creative-handoff.md'],
  },
}

await mkdir(path.join(aiRoot, 'context'), { recursive: true })
for (const [name, bundle] of Object.entries(bundleSpecs)) {
  const body = bundle.paths.map((documentPath) => {
    const content = contents.get(documentPath)
    if (!content) throw new Error(`Documento ausente no bundle ${name}: ${documentPath}`)
    return `<!-- source: docs/${documentPath} -->\n\n${content.trim()}`
  }).join('\n\n---\n\n')
  await writeFile(path.join(aiRoot, 'context', `${name}.md`), `# ${bundle.title}\n\n> Bundle gerado. Edite apenas as fontes indicadas em cada seção.\n\n${body}\n`)
}

const creativeDocuments = documents.filter((document) => document.category !== 'benchmarks')
const llms = `# Beegloo Brand Guide

> Roteador oficial de contexto. Carregue o menor bundle que corresponda à intenção do trabalho.

## Contexto por intenção

- [Core: identidade e autoridade mínimas](/ai/context/core.md)
- [Marketing: criação comercial](/ai/context/marketing.md)
- [Produto e UI: interfaces funcionais](/ai/context/ui.md)
- [Menu board: guide específico da tarefa](/ai/context/menu-board.md)
- [Workflow: processo criativo e continuidade](/ai/context/workflow.md)

## Ferramentas de trabalho

- [Template de creative brief](/ai/templates/creative-brief.md)
- [Benchmarks de avaliação — carregar somente depois da criação](/ai/benchmarks/README.md)
- [Manifesto estruturado JSON](/brand-context.json)
- [Documentação para pessoas](/docs)

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
  lastReviewed: '2026-08-31',
  entrypoints: { default: '/ai/context/core.md', concise: '/llms.txt', human: '/', humanDocs: '/docs?doc=ai/brand-context.md#docs' },
  contextBundles: Object.fromEntries(Object.keys(bundleSpecs).map((name) => [name, `/ai/context/${name}.md`])),
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
  productCatalog: {
    status: 'active',
    source: '/ai/products/catalog.md',
    workingReferencesStatus: 'active',
    finalProductAssetsStatus: 'pending',
  },
  mascotAssetStatus: 'missing',
  channelGuides: { marketing: '/ai/context/marketing.md', ui: '/ai/context/ui.md' },
  evaluation: { index: '/ai/benchmarks/README.md', loadPolicy: 'after-creation-only' },
  invariants: [
    'Never recreate or modify official logos.',
    'Never infer product, packaging, naming, flavor, price, or legal facts.',
    'AI output is not an official reference without explicit human approval.',
  ],
  documents: creativeDocuments.map((document) => document.source),
  documentIndex: creativeDocuments,
}

await writeFile(path.join(publicRoot, 'llms.txt'), llms)
await writeFile(path.join(publicRoot, 'brand-context.json'), `${JSON.stringify(manifest, null, 2)}\n`)
await writeFile(path.join(publicRoot, 'docs-index.json'), `${JSON.stringify({ generatedAt: new Date().toISOString(), documents }, null, 2)}\n`)
