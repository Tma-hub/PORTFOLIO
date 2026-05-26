import { Link } from "react-router-dom";
import "./graphicsPage.css";

export default function GraphicsPage() {
  return (
    <div className="graphics-page">
      <header className="navbar">
        <Link to="/" className="logo">
          Tereza Matousova
        </Link>

        <nav className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/portfolio" className="active">
            Work
          </Link>
          <Link to="/contact">Contact me</Link>
        </nav>
      </header>

      <main className="graphics-content">
        <section className="graphics-intro">
          <h1>Graphics</h1>
          <p>
            Selected visual works across print, textile graphics, branding and
            digital compositions.
          </p>
        </section>

        <section className="graphics-grid">
          <article className="graphics-item">
            <div className="graphics-image"></div>
            <p>Poster design</p>
          </article>

          <article className="graphics-item">
            <div className="graphics-image"></div>
            <p>Textile graphic</p>
          </article>

          <article className="graphics-item">
            <div className="graphics-image"></div>
            <p>Visual identity</p>
          </article>
        </section>
      </main>
    </div>
  );
}