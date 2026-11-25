import { img } from '../data/studio'
import './Sections.css'

export default function Intro() {
  return (
    <section className="intro shell" aria-labelledby="intro-title">
      <p className="intro__label label" data-reveal>
        (01) — The studio
      </p>
      <h2 id="intro-title" className="intro__text" data-reveal>
        We design houses, workplaces and quiet public rooms. We make <em>fewer moves</em> with{' '}
        <em>better materials</em>, and we pay a lot of attention to the way daylight crosses a floor.
      </h2>
      <div className="intro__detail" data-reveal="image">
        <img src={img('1486718448742-163732cd1544', 900)} alt="Detail of a curved terracotta facade against a blue sky" loading="lazy" />
      </div>
      <p className="intro__note muted" data-reveal style={{ '--delay': '0.15s' }}>
        Nine people, two studios, thirty-eight built projects. We take on around six new commissions each year so
        that every one of them gets our full attention.
      </p>
    </section>
  )
}
