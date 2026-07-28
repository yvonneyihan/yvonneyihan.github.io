import { useEffect, useState } from "react";
import { PROJECTS, type Project, type ProjectGif } from "../data";
import { ExternalLinkIcon, GithubIcon, GlobeIcon } from "./icons";

function useGifCycle(gifs: ProjectGif[]) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (gifs.length <= 1) return;
    const id = setTimeout(() => {
      setIndex((current) => (current + 1) % gifs.length);
    }, gifs[index].durationMs);
    return () => clearTimeout(id);
  }, [gifs, index]);

  return index;
}

function ProjectCard({ title, description, tags, github, website, gifs }: Project) {
  const activeIndex = useGifCycle(gifs);

  return (
    <article className="card">
      <div className="card-media">
        <img src={gifs[activeIndex].src} alt={`${title} demo`} loading="lazy" />
      </div>
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
          {website && (
            <a className="card-link" href={website} target="_blank" rel="noopener">
              <GlobeIcon size={13} />
              Visit site
              <ExternalLinkIcon className="ext-icon" size={11} />
            </a>
          )}
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
