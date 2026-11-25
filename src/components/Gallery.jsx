import { useEffect, useRef, useState } from 'react'
import { GALLERY, img } from '../data/studio'
import './Gallery.css'

/**
 * A pinned, sideways gallery: the section is as tall as the strip is wide,
 * and while you scroll through it the strip slides left. The slide itself is a
 * pure CSS scroll-driven animation; JavaScript only measures how far it has to travel.
 * Browsers without scroll timelines get a normal swipeable row instead.
 */
export default function Gallery() {
  const section = useRef(null)
  const track = useRef(null)
  const [travel, setTravel] = useState(0)

  useEffect(() => {
    const measure = () => setTravel(Math.max(0, track.current.scrollWidth - window.innerWidth))
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <section ref={section} className="hgallery" style={{ '--travel': `${travel}px` }} aria-labelledby="gallery-title">
      <div className="hgallery__sticky">
        <header className="hgallery__head shell">
          <div>
            <p className="label muted">(05) — In focus</p>
            <h2 id="gallery-title">
              Apartment <em>Estrela</em>
            </h2>
          </div>
          <p className="hgallery__intro muted">
            A 1900s apartment in Lisbon, opened up around its original corridor. Keep scrolling to walk through the
            rooms.
          </p>
        </header>

        <div className="hgallery__track" ref={track} tabIndex={0} aria-label="Apartment Estrela photographs">
          {GALLERY.map((g, i) => (
            <figure key={g.id} className={`hgallery__item hgallery__item--${g.ratio}`}>
              <div className="hgallery__frame">
                <img src={img(g.id, 1400)} alt={g.caption} loading="lazy" draggable="false" />
              </div>
              <figcaption>
                <span className="label muted">{String(i + 1).padStart(2, '0')}</span> {g.caption}
              </figcaption>
            </figure>
          ))}
          <div className="hgallery__end">
            <p className="label muted">Completed 2022 · 145 m²</p>
            <p className="hgallery__end-title">
              Every door, shelf and lamp was drawn for <em>this</em> apartment.
            </p>
          </div>
        </div>

        <div className="hgallery__bar shell" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  )
}
