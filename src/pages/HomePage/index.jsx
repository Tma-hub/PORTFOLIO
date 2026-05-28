import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./style.css";

import lightOn from "../../img/light_on.png";
import darkOn from "../../img/dark_on.png";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="home">
      <header className="navbar">
        <div className="logo">Tereza Matousova</div>

        <nav className="nav-links">
          <div
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            <span>{darkMode ? "Dark mode" : "Light mode"}</span>
            <img src={darkMode ? darkOn : lightOn} alt="theme toggle" />
          </div>

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