import colorTokens from '../docs/tokens/colors.json'
import DocsExplorer from './DocsExplorer.jsx'

const colorLabels = { blue: 'Azul', pink: 'Rosa', brown: 'Marrom', green: 'Verde' }
const colorRoles = { blue: 'núcleo', pink: 'núcleo', brown: 'complementar', green: 'complementar' }

function Card({ title, children }) {
  return <article className="card"><h3>{title}</h3><p>{children}</p></article>
}

function Section({ id, tone = '', icon, title, lead, children }) {
  return <section id={id} className={`sec ${tone}`}>
    <header className="head"><span className="icon" aria-hidden="true">{icon}</span><div><span className="k">GUIA DE MARCA</span><h2>{title}</h2><p className="lead">{lead}</p></div></header>
    {children}
  </section>
}

function GuidePage() {
  return <>
    <header className="bar"><a className="brand" href="#top">Beegloo · Guia</a><nav aria-label="Navegação principal"><a href="#logo">Logo</a><a href="#colors">Cores</a><a href="#typography">Tipografia</a><a href="#ui">Formas &amp; UI</a><a href="#composition">Composição</a><a href="#contexts">Como usar</a><a href="/docs">Documentação</a></nav></header>
    <main id="top" className="wrap">
      <section className="hero"><div><span className="k">BEEGLOO BRAND GUIDE</span><h1>Uma marca leve,<br/>divertida e acolhedora.</h1><p className="lead">A entrada visual para o sistema vigente da Beegloo. Regras, fontes de verdade e processo criativo vivem na documentação canônica.</p><div className="hero-actions"><a className="primary-link" href="/docs">Explorar documentação</a><a className="secondary-link" href="/docs?doc=ai%2Fprocess.md#docs">Processo criativo</a></div></div></section>

      <Section id="visual-language" tone="blue" icon="✦" title="Linguagem visual" lead="Diversão sem excesso: forma, proporção, cor e espaço trabalham juntos."><div className="grid four"><Card title="Leve antes de pesado">Fundos claros, contraste confortável e poucas áreas escuras.</Card><Card title="Arredondado e acolhedor">Raios generosos e formas macias.</Card><Card title="Colorido com intenção">Azul e rosa como núcleo cromático.</Card><Card title="Respiro é identidade">Espaço vazio é parte da composição.</Card></div></Section>

      <Section id="logo" tone="pink" icon="◎" title="Logo" lead="Sempre usar os SVGs oficiais, sem reconstrução ou distorção."><div className="logo-main"><span className="label">Assinatura principal</span><img src="/brand/logos/primary.svg" alt="Assinatura principal Beegloo"/></div><div className="logo-row"><div className="logo-box signature"><span className="label">Sobre</span><img src="/brand/logos/on-color.svg" alt="Assinatura Beegloo sobre cor"/></div><div className="logo-box"><span className="label">Ícone azul</span><img src="/brand/logos/icon-blue.svg" alt="Ícone azul Beegloo"/></div><div className="logo-box"><span className="label">Ícone rosa</span><img src="/brand/logos/icon-pink.svg" alt="Ícone rosa Beegloo"/></div></div></Section>

      <Section id="colors" icon="◉" title="Cores" lead="Escalas completas 50–950. Azul e rosa são o núcleo; marrom e verde são famílias complementares."><div className="scales">{Object.entries(colorTokens.families).map(([name, colors]) => <article className="scale" key={name}><div className="scale-top"><strong>{colorLabels[name]}</strong><span>{colorRoles[name]}</span></div><div className="swatches">{colors.map((color, index) => <div className="sw" key={color}><div className="chip" style={{ background: color }}/><b>{colorTokens.steps[index]}</b><code>{color.toUpperCase()}</code></div>)}</div></article>)}</div></Section>

      <Section id="typography" tone="sand" icon="Aa" title="Tipografia" lead="Outfit é a tipografia principal e pode usar toda a escala de pesos."><div className="type"><div className="big">Doce, leve<br/>e marcante.</div><div className="weights">{[100,200,300,400,500,600,700,800,900].map((weight) => <div style={{ fontWeight: weight }} key={weight}><span>{weight}</span>Beegloo</div>)}</div></div></Section>

      <Section id="ui" tone="mint" icon="◫" title="Formas &amp; UI" lead="Superfícies claras, cards sem borda e grandes raios: o digital deve parecer Beegloo."><div className="ui"><article className="panel"><span className="pill">Novo</span><h3>Um card Beegloo</h3><p className="lead">A separação acontece por tonalidade, respiro e forma — não por borda pesada.</p></article><div className="radii"><div className="r r1">16</div><div className="r r2">28</div><div className="r r3">44</div></div></div></Section>

      <Section id="composition" tone="pink" icon="▦" title="Composição" lead="Uma ideia forte por vez, com hierarquia simples e áreas de respiro."><div className="poster"><span className="k">PRINCÍPIO DE LINGUAGEM</span><h3>Produto, tipo<br/>e mensagem juntos.</h3></div></Section>

      <Section id="contexts" tone="blue" icon="✣" title="Como usar" lead="Parta do conhecimento vigente e acrescente somente o contexto específico do trabalho."><div className="grid four"><article className="card"><h3>Conhecer a marca</h3><p>Leia e navegue pela fonte canônica vigente.</p><a className="card-link" href="/docs">Abrir documentação →</a></article><article className="card"><h3>Criar com IA</h3><p>Use o processo em etapas para explorar, escolher e refinar.</p><a className="card-link" href="/docs?doc=ai%2Fprocess.md#docs">Abrir processo →</a></article><article className="card"><h3>Preparar o trabalho</h3><p>Combine o guide com briefing, conteúdo e assets da execução.</p><a className="card-link" href="/docs?doc=templates%2Fcreative-brief.md#docs">Abrir creative brief →</a></article><article className="card"><h3>Continuar uma direção</h3><p>Preserve decisões aprovadas com um handoff verificável.</p><a className="card-link" href="/docs?doc=ai%2Fcreative-handoff.md#docs">Abrir protocolo →</a></article></div><div className="ai"><span className="k">PROMPTS SOB DEMANDA</span><h3>O guide guarda conhecimento. A skill transforma em instrução.</h3><p>No Codex, a Beegloo Prompt Builder seleciona as regras aplicáveis e gera um prompt autossuficiente para a ferramenta criativa escolhida.</p><a className="docs-link" href="/docs?doc=ai%2Fbrand-context.md#docs">Entender o contexto essencial →</a></div></Section>
    </main>
    <footer className="foot"><strong>Beegloo · Brand Guide</strong><span>Conhecimento vigente para pessoas e IAs</span></footer>
  </>
}

function DocsPage() {
  return <><header className="bar"><a className="brand" href="/">Beegloo · Guia</a><nav><a href="/">Voltar ao guia</a><a href="/docs?doc=ai%2Fprocess.md#docs">Processo criativo</a></nav></header><main className="wrap docs-page"><section id="docs" className="sec mint"><header className="head"><span className="icon" aria-hidden="true">≡</span><div><span className="k">FONTE CANÔNICA</span><h2>Documentação</h2><p className="lead">Leitura navegável dos arquivos Markdown que orientam a marca e o processo criativo.</p></div></header><DocsExplorer/></section></main><footer className="foot"><strong>Beegloo · Documentação</strong><a href="/">Voltar ao guia visual →</a></footer></>
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  return path === '/docs' ? <DocsPage/> : <GuidePage/>
}
