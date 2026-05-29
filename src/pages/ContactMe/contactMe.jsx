import "./contactMe.css";
import Navbar from "../../components/Navbar/Navbar";

import instagramIcon from "../../img/instagram.png";
import instagramDarkIcon from "../../img/instagram_dark.png";
import linkedinIcon from "../../img/linkedin.png";
import linkedinDarkIcon from "../../img/linkedin_dark.png";
import mailIcon from "../../img/mail.png";
import mailDarkIcon from "../../img/mail_dark.png";

export default function ContactMe() {
  return (
    <div className="contact-wrapper">
      <Navbar showThemeToggle={false} />

      <main className="contact-page">
        <section className="contact-icons">
          <a
            href="https://www.instagram.com/tereza.matous/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon-light" src={instagramIcon} alt="Instagram" />
            <img className="icon-dark" src={instagramDarkIcon} alt="Instagram" />
          </a>

          <a
            href="https://www.linkedin.com/in/tereza-matoušová-b16477178"
            target="_blank"
            rel="noreferrer"
          >
            <img className="icon-light" src={linkedinIcon} alt="LinkedIn" />
            <img className="icon-dark" src={linkedinDarkIcon} alt="LinkedIn" />
          </a>

          <a href="mailto:tereza.matousova@gmail.com">
            <img className="icon-light" src={mailIcon} alt="Email" />
            <img className="icon-dark" src={mailDarkIcon} alt="Email" />
          </a>
        </section>
      </main>
    </div>
  );
}