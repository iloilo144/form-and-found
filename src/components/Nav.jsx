import { useEffect, useState } from 'react'
import { useClock } from '../hooks/useClock'
import './Nav.css'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#studio', label: 'Studio' },
  { href: '#practice', label: 'Practice' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const time = useClock()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // stays light over the full-bleed hero photo, turns solid once the hero has scrolled away
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="nav__bar shell">
        <a href="#top" className="nav__mark" aria-label="Form & Found, back to top">
          Form <span>&amp;</span> Found
        </a>
        <p className="nav__clock label">
          Lisbon <time>{time}</time>
        </p>
        <nav className="nav__links" aria-label="Main">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="label">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="nav__toggle label" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div id="menu" className="menu" hidden={!open}>
        <nav aria-label="Mobile">
          {LINKS.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ '--i': i }}>
              <span className="label">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <p className="menu__foot label">
          Rua da Boavista 82, Lisbon · Lisbon {time}
        </p>
      </div>
    </header>
  )
}
