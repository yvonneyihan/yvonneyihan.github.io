import { CONTACT } from "../data";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <h2>Contact</h2>
        <p>
          I'm open to new opportunities, collaborations, or just a good conversation about software and data. Reach
          out through any of the channels below.
        </p>
        <ul className="contact-links">
          <li>
            <a href={`mailto:${CONTACT.email}`}>
              <MailIcon />
              Email
            </a>
          </li>
          <li>
            <a href={CONTACT.github} target="_blank" rel="noopener">
              <GithubIcon />
              GitHub
            </a>
          </li>
          <li>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener">
              <LinkedinIcon />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
