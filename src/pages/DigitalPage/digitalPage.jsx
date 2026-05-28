import { Link } from "react-router-dom";
import "./digitalPage.css";
import cloMockup from "../../img/clo_mockup.png";

function DigitalPage() {
  return (
    <div className="digital-page">
      <nav className="navbar">
        <Link to="/" className="logo">
          Tereza Matousova
        </Link>

        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact me</Link>
        </div>
      </nav>

      <main className="digital-content">
        <div className="digital-image">
          <a
            href="https://clo-set.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={cloMockup} alt="CLO 3D app mockup" />
          </a>
        </div>

        <div className="digital-text">
          <h1>CLO 3D</h1>

          <h3>About the App</h3>

          <p>
            CLO is a mobile application designed to simplify everyday outfit
            decisions with a focus on functionality, aesthetics, and
            sustainability.
          </p>

          <p>
            Using an algorithm based on factors such as color combinations,
            weather, season, and occasion, the app generates complete outfit
            recommendations directly from your wardrobe.
          </p>

          <p>
            The concept was created as a response to a common problem many women
            experience: “I have a full closet, but nothing to wear.”
          </p>

          <p>
            In today’s fast-paced world, CLO helps save time, discover new
            outfit combinations, and make better use of existing clothing
            pieces.
          </p>

          <p>
            At the same time, the app promotes a more sustainable approach to
            fashion by encouraging users to restyle and rewear clothes they
            already own, reducing unnecessary shopping and fashion waste.
          </p>

          <p>
            Our goal is to connect technology and fashion in an intuitive,
            aesthetic, and responsible way.
          </p>
        </div>
      </main>
    </div>
  );
}

export default DigitalPage;