import { useEffect, useState } from 'react'
import { HERO_SLIDES, img } from '../data/studio'
import './Hero.css'

const INTERVAL = 6500

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const reduced = document.documentElement.dataset.motion === 'calm'
    if (reduced || paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), INTERVAL)
    return () => clearInterval(id)
  }, [paused])

  const go = (step) => setIndex((i) => (i + step + HERO_SLIDES.length) % HERO_SLIDES.length)
  const current = HERO_SLIDES[index]

  return (
    <section className="hero" id="top" aria-label="Introduction">
      {/* full-bleed photography; zooms gently as you scroll away (CSS scroll timeline) */}
      <figure
        className="hero__media"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="Recent projects"
      >
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.id}
            src={img(slide.id, 2400)}
            alt={i === index ? slide.caption : ''}
            aria-hidden={i !== index}
            className={`hero__img ${i === index ? 'is-active' : ''}`}
            fetchPriority={i === 0 ? 'high' : 'low'}
          />
        ))}
      </figure>
      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__content shell">
        <p className="label hero__kicker">Architecture &amp; Interiors · Lisbon and the Alentejo coast</p>
        <h1 className="hero__title">
          <span className="hero__line">Rooms that hold</span>
          <span className="hero__line hero__line--indent">
            <em>the light.</em>
          </span>
        </h1>

        <div className="hero__row">
          <p className="hero__intro">
            An independent studio for architecture and interiors, making quiet houses and workplaces since 2014.
          </p>
          <a href="#work" className="line-link label hero__cta">
            Selected work <span aria-hidden="true">↓</span>
          </a>
          <div className="hero__controls">
            <span className="label" aria-live="polite">
              {current.caption}, {current.year}
            </span>
            <span className="hero__buttons">
              <button onClick={() => go(-1)} aria-label="Previous image">
                ←
              </button>
              <span className="label hero__count">
                0{index + 1} / 0{HERO_SLIDES.length}
              </span>
              <button onClick={() => go(1)} aria-label="Next image">
                →
              </button>
            </span>
          </div>
        </div>
      </div>
      <span key={index} className={`hero__progress ${paused ? 'is-paused' : ''}`} aria-hidden="true" />
    </section>
  )
}
