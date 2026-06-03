import Navbar from "../Navbar/Navbar";
import "./VisualIdentityPage.css";
import mockup from "../../img/mockup.jpeg";
import identityCard from "../../img/identity_card.png";

export default function VisualIdentityPage() {
  return (
    <div className="visual-identity-page">
      <Navbar />

      <main className="visual-identity-content">
        <section className="visual-identity-text">
          <p className="visual-identity-label">VISUAL IDENTITY</p>

          <h1>Weather Cover</h1>

          <p className="visual-identity-description">
            Vizual identity concept for Weather Cover, brand focused on handmade jewelry. Soft visual
            language, minimal packaging and calm protective aesthetics.
          </p>

          <div className="visual-identity-small-images">
            <img src={identityCard} alt="Weather Cover identity card" />
          </div>
        </section>

        <section className="visual-identity-image-wrapper">
          <img
            src={mockup}
            alt="Weather Cover packaging mockup"
            className="visual-identity-main-image"
          />
        </section>
      </main>
    </div>
  );
}