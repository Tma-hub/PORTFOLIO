import { Link } from "react-router-dom";
import "./workPage.css";

export default function WorkPage() {
  return (
    <div className="work-page">
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

      <main className="work-content">
        <Link to="#" className="work-card fashion-card">
  <span>Fashion</span>
</Link>

        <Link to="/graphics" className="work-card graphics-card">
  Graphics
</Link>

        <Link to="#" className="work-card">
          Digital<br />design
        </Link>
      </main>
    </div>
  );
}