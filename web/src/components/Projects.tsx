import { PROJECTS, type Project } from "../data";
import { ExternalLinkIcon, GithubIcon } from "./icons";

function ProjectCard({ title, description, tags, github }: Project) {
  return (
    <article className="card">
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="card-links">
          <a className="card-link" href={github} target="_blank" rel="noopener">
            <GithubIcon size={13} />
            View on GitHub
            <ExternalLinkIcon className="ext-icon" size={11} />
          </a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <h2>Projects</h2>
        <div className="project-grid">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
