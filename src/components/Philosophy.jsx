import { PRINCIPLES } from '../data/studio'

export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy" aria-labelledby="philosophy-title">
      <div className="shell">
        <header className="philosophy__head">
          <p className="label" data-reveal>
            (06) — What we believe
          </p>
          <h2 id="philosophy-title" data-reveal>
            A building should feel <em>inevitable</em>, as if it could not have been any other way.
          </h2>
        </header>
        <ol className="principles">
          {PRINCIPLES.map((p, i) => (
            <li key={p.title} data-reveal style={{ '--delay': `${i * 0.12}s` }}>
              <span className="principles__num">{['i', 'ii', 'iii'][i]}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
