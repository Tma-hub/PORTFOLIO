import "./contactMe.css";

import instagramIcon from "../../img/instagram.png";
import linkedinIcon from "../../img/linkedin.png";
import mailIcon from "../../img/mail.png";

export default function ContactMe() {
  return (
    <main className="contact-page">
      <section className="contact-icons">
        <a
          href="https://www.instagram.com/tereza.matous/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a
          href="https://www.linkedin.com/in/tereza-matoušová-b16477178"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>

        <a
          href="mailto:tereza.matousova@gmail.com"
          aria-label="Email"
        >
          <img src={mailIcon} alt="Email" />
        </a>
      </section>
    </main>
  );
}