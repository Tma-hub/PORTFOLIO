import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Navbar.css";

import lightOn from "../../img/light_on.png";
import darkOn from "../../img/dark_on.png";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Tereza Matousova
      </Link>

      <nav className="nav-links">
        <div
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          <span>{darkMode ? "Dark mode" : "Light mode"}</span>

          <img
            src={darkMode ? darkOn : lightOn}
            alt="theme toggle"
          />
        </div>

        <Link to="/about">About</Link>
        <Link to="/portfolio">Work</Link>
        <Link to="/contact">Contact me</Link>
      </nav>
    </header>
  );
}

export default Navbar;