import { Link } from "react-router-dom";
import "./fashionPage.css";

export default function FashionPage() {
  return (
    <div className="fashion-page">
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

      <main className="fashion-content">
        <section className="fashion-intro">
          <h1>Fashion</h1>
          <p>Selected fashion works, garments, collections and textile pieces.</p>
        </section>

        <section className="fashion-grid">
          {Array.from({ length: 9 }).map((_, index) => (
            <article className="fashion-item" key={index}>
              <div className="fashion-image"></div>
              <p>Product {index + 1}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}