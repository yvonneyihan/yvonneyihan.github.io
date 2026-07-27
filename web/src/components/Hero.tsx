import { CONTACT } from "../data";

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <p className="eyebrow">Portfolio</p>
        <h1>Hi, I'm Yvonne 👋</h1>
        <p className="tagline">"Full-Stack Developer Building Practical, Data-Driven Products"</p>
        <div className="hero-links">
          <a className="btn btn-primary" href="#projects">
            View my projects
          </a>
          <a className="btn btn-secondary" href="#contact">
            Get in touch
          </a>
        </div>
        <ul className="hero-contact">
          <li>
            <a href={`mailto:${CONTACT.email}`}>Email</a>
          </li>
          <li>
            <a href={CONTACT.github} target="_blank" rel="noopener">
              GitHub
            </a>
          </li>
          <li>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
