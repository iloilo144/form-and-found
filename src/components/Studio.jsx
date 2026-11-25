import { img } from '../data/studio'

const FACTS = [
  ['Founded', '2014, Lisbon'],
  ['Studios', 'Lisbon & Comporta'],
  ['People', 'Nine architects & designers'],
  ['Built', '38 projects in Portugal'],
]

export default function Studio() {
  return (
    <section id="studio" className="studio shell" aria-labelledby="studio-title">
      <div className="studio__img" data-reveal="image">
        <img
          src={img('1503387762-592deb58ef4e', 1200)}
          alt="An architect drawing plans by hand at a desk"
          loading="lazy"
        />
      </div>
      <div className="studio__text">
        <p className="label muted" data-reveal>
          (03) — How we work
        </p>
        <h2 id="studio-title" data-reveal>
          Drawn by hand, <em>then built carefully.</em>
        </h2>
        <p data-reveal>
          Every project starts with a week of sketching on site. We draw by hand before we model anything, because
          it keeps the early conversations about feeling and proportion rather than software.
        </p>
        <p data-reveal>
          We stay with each building until it is finished. The same architect who draws the first sketch is on site
          when the last door handle goes on.
        </p>
        <dl className="facts">
          {FACTS.map(([term, value], i) => (
            <div key={term} data-reveal style={{ '--delay': `${i * 0.08}s` }}>
              <dt className="label muted">{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
