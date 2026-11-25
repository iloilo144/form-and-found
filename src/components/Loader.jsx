import { useEffect, useState } from 'react'
import './Loader.css'

const WORD = 'Form & Found'

/** Opening curtain: the wordmark rises letter by letter, then the two panels part. Once per visit. */
export default function Loader() {
  const [show, setShow] = useState(() => {
    try {
      if (sessionStorage.getItem('ff-intro')) return false
      sessionStorage.setItem('ff-intro', '1')
    } catch {
      /* storage blocked: still fine to play it */
    }
    return !(document.documentElement.dataset.motion === 'calm')
  })

  useEffect(() => {
    if (!show) return
    document.documentElement.classList.add('is-loading')
    const t = setTimeout(() => {
      setShow(false)
      document.documentElement.classList.remove('is-loading')
    }, 2600)
    return () => clearTimeout(t)
  }, [show])

  if (!show) return null
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader__panel loader__panel--top" />
      <div className="loader__panel loader__panel--bottom" />
      <p className="loader__word">
        {WORD.split('').map((ch, i) => (
          <span key={i} style={{ '--i': i }}>
            {ch === ' ' ? ' ' : ch}
          </span>
        ))}
      </p>
      <span className="loader__line" />
    </div>
  )
}
