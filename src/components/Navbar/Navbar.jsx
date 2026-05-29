import { Link } from "react-router-dom";

import "./Navbar.css";

import lightOn from "../../img/light_on.png";
import darkOn from "../../img/dark_on.png";

function Navbar({
  darkMode,
  setDarkMode,
  showThemeToggle = false,
}) {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Tereza Matousova
      </Link>

      <nav className="nav-links">
        {showThemeToggle && (
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
        )}

        <Link to="/about">About</Link>
        <Link to="/portfolio">Work</Link>
        <Link to="/contact">Contact me</Link>
      </nav>
    </header>
  );
}

export default Navbar;