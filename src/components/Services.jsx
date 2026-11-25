import { useState } from 'react'
import { SERVICES } from '../data/studio'

export default function Services() {
  const [open, setOpen] = useState(0)

  return (
    <section id="practice" className="services shell" aria-labelledby="services-title">
      <header className="services__head">
        <p className="label muted" data-reveal>
          (04) — Practice
        </p>
        <h2 id="services-title" data-reveal>
          What we do
        </h2>
      </header>

      <ol className="services__list">
        {SERVICES.map((s, i) => {
          const isOpen = open === i
          return (
            <li key={s.title} className={isOpen ? 'is-open' : ''} data-reveal style={{ '--delay': `${i * 0.06}s` }}>
              <h3>
                <button
                  id={`svc-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`svc-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="label muted">0{i + 1}</span>
                  <span className="services__title">{s.title}</span>
                  <span className="services__icon" aria-hidden="true" />
                </button>
              </h3>
              <div id={`svc-panel-${i}`} role="region" aria-labelledby={`svc-${i}`} className="services__panel">
                <div>
                  <p>{s.text}</p>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
