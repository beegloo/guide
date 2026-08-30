import { useEffect, useMemo, useState } from 'react'

const categoryNames = {
  general: 'Visão geral',
  foundations: 'Fundamentos',
  identity: 'Identidade',
  products: 'Produtos',
  photography: 'Fotografia',
  commercial: 'Comercial',
  applications: 'Aplicações',
  ai: 'Inteligência artificial',
  decisions: 'Decisões',
  references: 'Referências',
}

const statusNames = { official: 'oficial', active: 'ativo', exploratory: 'exploratório', pending: 'pendente', superseded: 'substituído' }
const categoryOrder = ['general', 'foundations', 'identity', 'products', 'photography', 'commercial', 'applications', 'ai', 'references', 'decisions']

const specialLine = /^(#{1,6}\s|[-*]\s|\d+\.\s|>\s|```|---$|\|)/

function Inline({ children }) {
  const parts = String(children).split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) return <code key={index}>{part.slice(1, -1)}</code>
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) return <a key={index} href={link[2]}>{link[1]}</a>
    return part
  })
}

function Markdown({ source }) {
  const lines = source.replace(/\r/g, '').split('\n')
  const blocks = []
  let index = 0
  let blockIndex = 0

  while (index < lines.length) {
    const line = lines[index]
    if (!line.trim()) { index += 1; continue }

    const heading = line.match(/^(#{1,6})\s+(.+)$/)
    if (heading) {
      const Level = `h${heading[1].length}`
      blocks.push(<Level key={`block-${blockIndex++}`}><Inline>{heading[2]}</Inline></Level>)
      index += 1
      continue
    }

    if (line.startsWith('```')) {
      const code = []
      index += 1
      while (index < lines.length && !lines[index].startsWith('```')) code.push(lines[index++])
      index += 1
      blocks.push(<pre key={`block-${blockIndex++}`}><code>{code.join('\n')}</code></pre>)
      continue
    }

    if (/^[-*]\s/.test(line)) {
      const items = []
      while (index < lines.length && /^[-*]\s/.test(lines[index])) items.push(lines[index++].replace(/^[-*]\s/, ''))
      blocks.push(<ul key={`block-${blockIndex++}`}>{items.map((item, itemIndex) => <li key={itemIndex}><Inline>{item}</Inline></li>)}</ul>)
      continue
    }

    if (/^\d+\.\s/.test(line)) {
      const items = []
      while (index < lines.length && /^\d+\.\s/.test(lines[index])) items.push(lines[index++].replace(/^\d+\.\s/, ''))
      blocks.push(<ol key={`block-${blockIndex++}`}>{items.map((item, itemIndex) => <li key={itemIndex}><Inline>{item}</Inline></li>)}</ol>)
      continue
    }

    if (line.startsWith('> ')) {
      const quote = []
      while (index < lines.length && lines[index].startsWith('> ')) quote.push(lines[index++].slice(2))
      blocks.push(<blockquote key={`block-${blockIndex++}`}><Inline>{quote.join(' ')}</Inline></blockquote>)
      continue
    }

    if (line.startsWith('|') && lines[index + 1]?.match(/^\|[\s|:-]+\|$/)) {
      const rows = []
      while (index < lines.length && lines[index].startsWith('|')) rows.push(lines[index++].split('|').slice(1, -1).map((cell) => cell.trim()))
      const [header, , ...body] = rows
      blocks.push(<div className="doc-table-wrap" key={`block-${blockIndex++}`}><table><thead><tr>{header.map((cell, cellIndex) => <th key={cellIndex}><Inline>{cell}</Inline></th>)}</tr></thead><tbody>{body.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}><Inline>{cell}</Inline></td>)}</tr>)}</tbody></table></div>)
      continue
    }

    if (line === '---') { blocks.push(<hr key={`block-${blockIndex++}`}/>); index += 1; continue }

    const paragraph = [line]
    index += 1
    while (index < lines.length && lines[index].trim() && !specialLine.test(lines[index])) paragraph.push(lines[index++])
    blocks.push(<p key={`block-${blockIndex++}`}><Inline>{paragraph.join(' ')}</Inline></p>)
  }

  return <div className="markdown">{blocks}</div>
}

function selectedFromUrl() {
  return new URLSearchParams(window.location.search).get('doc') || 'ai/brand-context.md'
}

export default function DocsExplorer() {
  const [documents, setDocuments] = useState([])
  const [selected, setSelected] = useState(selectedFromUrl)
  const [content, setContent] = useState('')
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')
  const [copyState, setCopyState] = useState('Copiar link')

  useEffect(() => {
    const controller = new AbortController()
    fetch('/docs-index.json', { signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error('Índice indisponível')))
      .then((data) => setDocuments(data.documents))
      .catch((reason) => { if (reason.name !== 'AbortError') setError(reason.message) })
    return () => controller.abort()
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    setContent('')
    setError('')
    fetch(`/ai/${selected}`, { signal: controller.signal })
      .then((response) => response.ok ? response.text() : Promise.reject(new Error('Documento indisponível')))
      .then(setContent)
      .catch((reason) => { if (reason.name !== 'AbortError') setError(reason.message) })
    return () => controller.abort()
  }, [selected])

  useEffect(() => {
    const onPopState = () => setSelected(selectedFromUrl())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('pt-BR')
    if (!normalized) return documents
    return documents.filter((document) => `${document.title} ${document.path} ${document.category} ${document.status} ${statusNames[document.status]}`.toLocaleLowerCase('pt-BR').includes(normalized))
  }, [documents, query])

  const grouped = useMemo(() => filtered.reduce((groups, document) => {
    groups[document.category] ??= []
    groups[document.category].push(document)
    return groups
  }, {}), [filtered])
  const current = documents.find((document) => document.path === selected)
  const stats = useMemo(() => documents.reduce((summary, document) => {
    summary.total += 1
    summary[document.status] = (summary[document.status] || 0) + 1
    return summary
  }, { total: 0 }), [documents])

  useEffect(() => {
    if (!current) return
    document.title = `${current.title} · Beegloo`
  }, [current])

  const openDocument = (event, path) => {
    event.preventDefault()
    const url = new URL(window.location.href)
    url.searchParams.set('doc', path)
    url.hash = 'docs'
    window.history.pushState({}, '', url)
    setSelected(path)
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopyState('Link copiado')
    } catch {
      setCopyState('Não foi possível copiar')
    }
    window.setTimeout(() => setCopyState('Copiar link'), 1800)
  }

  return <div className="docs-shell">
    <aside className="docs-sidebar" aria-label="Documentos do guia">
      <div className="docs-summary"><strong>{stats.total}</strong><span>documentos</span><small>{stats.pending || 0} pendentes</small></div>
      <label htmlFor="docs-search">Buscar documentação</label>
      <input id="docs-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nome, tema ou status"/>
      <nav>
        {categoryOrder.filter((category) => grouped[category]?.length).map((category) => <section key={category}>
          <h3>{categoryNames[category] || category}</h3>
          {grouped[category].map((document) => <a className={document.path === selected ? 'active' : ''} href={`?doc=${encodeURIComponent(document.path)}#docs`} onClick={(event) => openDocument(event, document.path)} key={document.path} aria-current={document.path === selected ? 'page' : undefined}>
            <span>{document.title}</span><small>{statusNames[document.status] || document.status}</small>
          </a>)}
        </section>)}
      </nav>
      {documents.length > 0 && filtered.length === 0 ? <p className="docs-empty">Nenhum documento encontrado.</p> : null}
    </aside>
    <article className="docs-reader" aria-live="polite">
      <header><div><small>FONTE CANÔNICA · MARKDOWN</small><strong>{current?.path || selected}</strong></div><div className="docs-actions">{current ? <span className={`status status-${current.status}`}>{statusNames[current.status] || current.status}</span> : null}<button type="button" onClick={copyLink}>{copyState}</button></div></header>
      {error ? <p className="docs-error">{error}</p> : content ? <Markdown source={content}/> : <p className="docs-loading">Carregando documento…</p>}
    </article>
  </div>
}
