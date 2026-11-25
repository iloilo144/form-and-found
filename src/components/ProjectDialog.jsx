import { useEffect, useRef, useState } from 'react'
import { img } from '../data/studio'
import './ProjectDialog.css'

export default function ProjectDialog({ project, onClose }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(project)

  useEffect(() => {
    const dialog = ref.current
    if (project) {
      setShown(project)
      if (!dialog.open) dialog.showModal()
      dialog.scrollTop = 0
    } else if (dialog.open) {
      dialog.close()
    }
  }, [project])

  return (
    <dialog ref={ref} className="pdialog" onClose={onClose} aria-labelledby="pdialog-title">
      {shown && (
        <article>
          <header className="pdialog__bar">
            <span className="label muted">
              {shown.type} · {shown.place}
            </span>
            <button className="line-link label" onClick={onClose}>
              Close <span aria-hidden="true">✕</span>
            </button>
          </header>
          <div className="pdialog__hero">
            <img src={img(shown.image, 2000)} alt={`${shown.name}, ${shown.place}`} />
          </div>
          <div className="pdialog__body">
            <h2 id="pdialog-title">{shown.name}</h2>
            <div>
              <p className="pdialog__text">{shown.text}</p>
              <dl className="pdialog__facts">
                <div>
                  <dt className="label muted">Location</dt>
                  <dd>{shown.place}, Portugal</dd>
                </div>
                <div>
                  <dt className="label muted">Completed</dt>
                  <dd>{shown.year}</dd>
                </div>
                <div>
                  <dt className="label muted">Area</dt>
                  <dd>{shown.area}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="pdialog__extra">
            {shown.extra.map((id, i) => (
              <img key={id} src={img(id, 1200)} alt={`${shown.name}, detail ${i + 1}`} loading="lazy" />
            ))}
          </div>
        </article>
      )}
    </dialog>
  )
}
