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
    <header className="bar"><a className="brand" href="#top">Beegloo · Guia</a><nav aria-label="Navegação principal"><a href="#logo">Logo</a><a href="#colors">Cores</a><a href="#typography">Tipografia</a><a href="#ui">Formas &amp; UI</a><a href="#composition">Composição</a><a href="#applications">Aplicações</a><a href="/docs">Documentação</a></nav></header>
    <main id="top" className="wrap">
      <section className="hero"><div><span className="k">SISTEMA VISUAL · REACT</span><h1>Uma marca leve,<br/>divertida e acolhedora.</h1><p className="lead">O guia visual da Beegloo em uma aplicação React pronta para refinarmos e, depois, levarmos ao GitHub.</p></div></section>

      <Section id="visual-language" tone="blue" icon="✦" title="Linguagem visual" lead="Diversão sem excesso: forma, proporção, cor e espaço trabalham juntos."><div className="grid four"><Card title="Leve antes de pesado">Fundos claros, contraste confortável e poucas áreas escuras.</Card><Card title="Arredondado e acolhedor">Raios generosos e formas macias.</Card><Card title="Colorido com intenção">Azul e rosa como núcleo cromático.</Card><Card title="Respiro é identidade">Espaço vazio é parte da composição.</Card></div></Section>

      <Section id="logo" tone="pink" icon="◎" title="Logo" lead="Sempre usar os SVGs oficiais, sem reconstrução ou distorção."><div className="logo-main"><span className="label">Assinatura principal</span><img src="/brand/logos/primary.svg" alt="Assinatura principal Beegloo"/></div><div className="logo-row"><div className="logo-box signature"><span className="label">Sobre</span><img src="/brand/logos/on-color.svg" alt="Assinatura Beegloo sobre cor"/></div><div className="logo-box"><span className="label">Ícone azul</span><img src="/brand/logos/icon-blue.svg" alt="Ícone azul Beegloo"/></div><div className="logo-box"><span className="label">Ícone rosa</span><img src="/brand/logos/icon-pink.svg" alt="Ícone rosa Beegloo"/></div></div></Section>

      <Section id="colors" icon="◉" title="Cores" lead="Escalas completas 50–950. Azul e rosa são o núcleo; marrom e verde são famílias complementares."><div className="scales">{Object.entries(colorTokens.families).map(([name, colors]) => <article className="scale" key={name}><div className="scale-top"><strong>{colorLabels[name]}</strong><span>{colorRoles[name]}</span></div><div className="swatches">{colors.map((color, index) => <div className="sw" key={color}><div className="chip" style={{ background: color }}/><b>{colorTokens.steps[index]}</b><code>{color.toUpperCase()}</code></div>)}</div></article>)}</div></Section>

      <Section id="typography" tone="sand" icon="Aa" title="Tipografia" lead="Outfit é a tipografia principal e pode usar toda a escala de pesos."><div className="type"><div className="big">Doce, leve<br/>e marcante.</div><div className="weights">{[100,200,300,400,500,600,700,800,900].map((weight) => <div style={{ fontWeight: weight }} key={weight}><span>{weight}</span>Beegloo</div>)}</div></div></Section>

      <Section id="ui" tone="mint" icon="◫" title="Formas &amp; UI" lead="Superfícies claras, cards sem borda e grandes raios: o digital deve parecer Beegloo."><div className="ui"><article className="panel"><span className="pill">Novo</span><h3>Um card Beegloo</h3><p className="lead">A separação acontece por tonalidade, respiro e forma — não por borda pesada.</p></article><div className="radii"><div className="r r1">16</div><div className="r r2">28</div><div className="r r3">44</div></div></div></Section>

      <Section id="composition" tone="pink" icon="▦" title="Composição" lead="Uma ideia forte por vez, com hierarquia simples e áreas de respiro."><div className="poster"><span className="k">EXEMPLO DE LINGUAGEM</span><h3>Uma ideia<br/>forte por vez.</h3><span className="pill">R$ 00,00</span></div></Section>

      <Section id="applications" tone="blue" icon="✣" title="Aplicações &amp; IA" lead="Cardápio, loja, social e digital compartilham o mesmo vocabulário visual."><div className="grid four"><Card title="Cardápio">Produto e preço em primeiro plano.</Card><Card title="Loja">Grandes áreas de cor e mensagens curtas.</Card><Card title="Digital">Neutros suaves e controles arredondados.</Card><Card title="Fotografia">Produto apetitoso e reconhecível.</Card></div><div className="ai"><span className="k">ORIENTAÇÃO PARA IA</span><h3>Preservar o sistema, não copiar uma peça.</h3><p>Direção leve, divertida e acolhedora; Outfit; azul e rosa como núcleo; marrom e verde como complementos; formas macias; composição arejada; neutros suaves; evitar estética infantil genérica, excesso, cantos duros e logos recriados.</p><a className="docs-link" href="/docs">Abrir documentação completa →</a></div></Section>
    </main>
    <footer className="foot"><strong>Beegloo · Guia visual</strong><span>React preview · agosto de 2026</span></footer>
  </>
}

function DocsPage() {
  return <><header className="bar"><a className="brand" href="/">Beegloo · Guia</a><nav><a href="/">Voltar ao guia</a><a href="/llms-full.txt">Contexto para IA</a></nav></header><main className="wrap docs-page"><section id="docs" className="sec mint"><header className="head"><span className="icon" aria-hidden="true">≡</span><div><span className="k">FONTE CANÔNICA</span><h2>Documentação</h2><p className="lead">Leitura navegável dos arquivos Markdown que orientam pessoas e IAs.</p></div></header><DocsExplorer/></section></main><footer className="foot"><strong>Beegloo · Documentação</strong><a href="/">Voltar ao guia visual →</a></footer></>
}

export default function App() {
  return window.location.pathname === '/docs' ? <DocsPage/> : <GuidePage/>
}
