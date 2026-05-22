import './style.css';
import { Link } from 'react-router-dom';
import './style.css';

export default function HomePage() {
  return (
    <div className="home">
      <header className="navbar">
        <div className="logo">Tereza Matousova</div>

        <nav className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/portfolio">Work</Link>
          <Link to="/contact">Contact me</Link>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-left">
          <h1>
            Garment Designer
            <br />
            Technologist
            <br />
            Graphic
          </h1>
        </div>

        <div className="hero-right">
          <p>
            specialized in Sportswear and Apparel Design, expanding into Digital
            Design and Front End Development
          </p>
        </div>
      </main>
    </div>
  );
}
