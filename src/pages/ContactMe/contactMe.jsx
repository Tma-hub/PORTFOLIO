import "./contactMe.css";
import { Link } from "react-router-dom";

import instagramIcon from "../../img/instagram.png";
import linkedinIcon from "../../img/linkedin.png";
import mailIcon from "../../img/mail.png";

export default function ContactMe() {
  return (
    <div className="contact-wrapper">
      <header className="navbar">
        <Link to="/" className="logo">
          Tereza Matousova
        </Link>

        <nav className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/portfolio">Work</Link>
          <Link to="/contact">Contact me</Link>
        </nav>
      </header>

      <main className="contact-page">
        <section className="contact-icons">
          <a href="https://www.instagram.com/tereza.matous/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>

          <a href="https://www.linkedin.com/in/tereza-matoušová-b16477178" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>

          <a href="mailto:tereza.matousova@gmail.com">
            <img src={mailIcon} alt="Email" />
          </a>
        </section>
      </main>
    </div>
  );
}