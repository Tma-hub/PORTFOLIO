import Navbar from "../../components/Navbar/Navbar";

import "./style.css";

export default function HomePage({
  darkMode,
  setDarkMode,
}) {
  return (
    <div className="home">
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        showThemeToggle={true}
      />

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
            specialized in Sportswear and Apparel Design,
            expanding into Digital Design and Front End
            Development
          </p>
        </div>
      </main>
    </div>
  );
}