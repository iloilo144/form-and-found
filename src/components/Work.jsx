import { useRef, useState } from 'react'
import { PROJECTS, img } from '../data/studio'
import './Work.css'

const FEATURED = PROJECTS.slice(0, 3)

export default function Work({ onOpen }) {
  const [hovered, setHovered] = useState(null)
  const previewRef = useRef(null)
  const frame = useRef(0)

  // The floating preview follows the cursor; rAF keeps it smooth without re-rendering React.
  const move = (e) => {
    cancelAnimationFrame(frame.current)
    const { clientX, clientY } = e
    frame.current = requestAnimationFrame(() => {
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`
      }
    })
  }

  return (
    <section id="work" className="work shell" aria-labelledby="work-title">
      <header className="work__head">
        <p className="label" data-reveal>
          (02) — Selected work
        </p>
        <h2 id="work-title" data-reveal>
          Six projects, <em>2021–2024</em>
        </h2>
      </header>

      <div className="featured">
        {FEATURED.map((p, i) => (
          <button key={p.id} className={`plate plate--${i + 1}`} onClick={() => onOpen(p)} data-reveal style={{ '--delay': `${i * 0.1}s` }}>
            <span className="plate__img">
              <img src={img(p.image, i === 0 ? 1600 : 1000)} alt={`${p.name}, ${p.place}`} loading="lazy" />
            </span>
            <span className="plate__caption">
              <span className="plate__name">{p.name}</span>
              <span className="label muted">
                {p.place} · {p.year}
              </span>
            </span>
          </button>
        ))}
      </div>

      <div className="index" onMouseMove={move} onMouseLeave={() => setHovered(null)}>
        <div className="index__head label muted" aria-hidden="true">
          <span>No.</span>
          <span>Project</span>
          <span>Location</span>
          <span>Type</span>
          <span>Year</span>
        </div>
        <ul>
          {PROJECTS.map((p, i) => (
            <li key={p.id} data-reveal style={{ '--delay': `${i * 0.05}s` }}>
              <button
                className={`index__row ${hovered && hovered !== p.id ? 'is-dim' : ''}`}
                onMouseEnter={() => setHovered(p.id)}
                onFocus={() => setHovered(p.id)}
                onBlur={() => setHovered(null)}
                onClick={() => onOpen(p)}
              >
                <span className="label muted">{String(i + 1).padStart(2, '0')}</span>
                <span className="index__name">{p.name}</span>
                <span>{p.place}</span>
                <span className="index__type">{p.type}</span>
                <span>{p.year}</span>
              </button>
            </li>
          ))}
        </ul>

        <div ref={previewRef} className={`index__preview ${hovered ? 'is-visible' : ''}`} aria-hidden="true">
          {PROJECTS.map((p) => (
            <img key={p.id} src={img(p.image, 700)} alt="" className={hovered === p.id ? 'is-active' : ''} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  )
}
