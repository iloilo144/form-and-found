import { useState } from 'react'
import './Inquiry.css'

const TYPES = ['New house', 'Renovation', 'Interior', 'Workplace', 'Something else']
const BUDGETS = ['Under €250k', '€250k–750k', '€750k–2m', 'Over €2m']
const EMPTY = { name: '', email: '', type: '', location: '', budget: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please tell us your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'We need a valid email address to reply.'
  if (!v.type) e.type = 'Choose the closest project type.'
  if (v.message.trim().length < 20) e.message = 'A sentence or two about the project helps us prepare (20+ characters).'
  return e
}

export default function Inquiry() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const change = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      e.currentTarget.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus()
      return
    }
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 900)
  }

  const field = (name) => ({
    id: `q-${name}`,
    name,
    value: values[name],
    onChange: change,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `q-${name}-err` : undefined,
  })
  const err = (name) =>
    errors[name] && (
      <span className="inq__error" id={`q-${name}-err`}>
        {errors[name]}
      </span>
    )

  return (
    <section id="contact" className="inquiry shell" aria-labelledby="contact-title">
      <div className="inquiry__intro">
        <p className="label muted" data-reveal>
          (07) — Commissions
        </p>
        <h2 id="contact-title" data-reveal>
          Start a <em>conversation.</em>
        </h2>
        <p className="muted" data-reveal>
          Tell us about the site, the people who will live or work there, and when you hope to begin. We reply to
          every message within three working days.
        </p>
        <address className="inquiry__address" data-reveal>
          <span className="label muted">Lisbon</span>
          Rua da Boavista 82, 1200-066
          <span className="label muted">Comporta</span>
          Rua do Comércio 14, 7580-612
        </address>
      </div>

      {status === 'sent' ? (
        <div className="inquiry__done" role="status">
          <p className="label muted">Received</p>
          <h3>Thank you, {values.name.trim().split(' ')[0]}.</h3>
          <p>
            We’ll read about your {values.type.toLowerCase()} project properly and reply to{' '}
            <strong>{values.email.trim()}</strong> within three working days.
          </p>
          <p className="inquiry__demo">
            This is a concept website for a portfolio, so the form isn’t connected to a real inbox.
          </p>
          <button
            className="line-link label"
            onClick={() => {
              setValues(EMPTY)
              setStatus('idle')
            }}
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form className="inq" onSubmit={submit} noValidate>
          <div className="inq__row">
            <div className="inq__field">
              <label htmlFor="q-name" className="label">Name</label>
              <input autoComplete="name" {...field('name')} />
              {err('name')}
            </div>
            <div className="inq__field">
              <label htmlFor="q-email" className="label">Email</label>
              <input type="email" autoComplete="email" {...field('email')} />
              {err('email')}
            </div>
          </div>

          <fieldset className="inq__field inq__choices">
            <legend className="label">Project</legend>
            <div>
              {TYPES.map((t) => (
                <label key={t}>
                  <input
                    type="radio"
                    name="type"
                    value={t}
                    checked={values.type === t}
                    onChange={change}
                    aria-describedby={errors.type ? 'q-type-err' : undefined}
                  />
                  <span>{t}</span>
                </label>
              ))}
            </div>
            {err('type')}
          </fieldset>

          <div className="inq__row">
            <div className="inq__field">
              <label htmlFor="q-location" className="label">Location (optional)</label>
              <input placeholder="Town or region" {...field('location')} />
            </div>
            <div className="inq__field">
              <label htmlFor="q-budget" className="label">Budget (optional)</label>
              <select {...field('budget')}>
                <option value="">Prefer to discuss</option>
                {BUDGETS.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="inq__field">
            <label htmlFor="q-message" className="label">About the project</label>
            <textarea rows={4} {...field('message')} />
            {err('message')}
          </div>

          <button className="inq__submit" disabled={status === 'sending'}>
            <span>{status === 'sending' ? 'Sending…' : 'Send enquiry'}</span>
            <span aria-hidden="true">→</span>
          </button>
        </form>
      )}
    </section>
  )
}
