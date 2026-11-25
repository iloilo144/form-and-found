import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer shell">
      <div className="footer__grid">
        <div>
          <p className="label muted">Studio</p>
          <p>
            Rua da Boavista 82
            <br />
            1200-066 Lisbon
          </p>
        </div>
        <div>
          <p className="label muted">Follow</p>
          <p>
            Instagram — @formandfound
            <br />
            Journal — twice a year
          </p>
        </div>
        <div>
          <p className="label muted">Index</p>
          <p className="footer__links">
            <a href="#work">Work</a>
            <a href="#studio">Studio</a>
            <a href="#practice">Practice</a>
            <a href="#contact">Contact</a>
          </p>
        </div>
        <div className="footer__top">
          <a href="#top" className="line-link label">
            Back to top ↑
          </a>
        </div>
      </div>
      <p className="footer__mark" aria-hidden="true">
        Form <em>&amp;</em> Found
      </p>
      <p className="footer__small label muted">
        <span>© {new Date().getFullYear()} Form &amp; Found Architects</span>
        <span>A fictional studio, designed and built as a portfolio project. Photography via Unsplash.</span>
      </p>
    </footer>
  )
}
