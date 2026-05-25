import { Link } from 'react-router-dom';
import './aboutPage.css';
import portrait from "../../img/portrait.png";

export default function AboutPage() {
  return (
    <div className="about-page">
      <header className="navbar">
        <Link to="/" className="logo">
          Tereza Matousova
        </Link>

        <nav className="nav-links">
          <Link to="/about" className="active">
            About
          </Link>

          <Link to="/portfolio">Work</Link>

          <Link to="/contact">Contact me</Link>
        </nav>
      </header>

      <main className="about-content">
        <section className="about-text">
          <p>
            Worked across multiple roles including designer, garment
            technologist, pattern designer, and graphic designer within
            sportswear development.
          </p>

          <p>
            Developed technical documentation for 100+ of products across
            multiple sportswear collections annually.
          </p>

          <p>
            Supported end-to-end product development, from initial design
            concepts through to production readiness.
          </p>

          <p>
            Created and maintained detailed tech packs, including size charts
            and material specifications. Selected appropriate fabrics and
            components with a focus on functionality, quality, and
            cost-efficiency.
          </p>

          <p>
            Collaborated with suppliers and manufacturers on material sourcing
            and production readiness. Ensured all design and technical
            requirements were aligned for a smooth transition into
            manufacturing.
          </p>

          <p>
            Contributed to improved production efficiency and reduced sampling
            iterations through optimized technical documentation and supplier
            communication.
          </p>
        </section>

        <img className="about-image" src={portrait} alt="Portrait" />
      </main>
    </div>
  );
}
