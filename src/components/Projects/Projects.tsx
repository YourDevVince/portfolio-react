import "./Projects.css";
import { projects } from "../../data/projects";



export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <h2 className="projects__title">Projects</h2>
          <p className="projects__subtitle">
            A few things I've built—focused on clean UI, real features, and shipping.
          </p>
        </div>

        <ul className="projects__grid" aria-label="Projects list">
          {projects.map((project: (typeof projects)[number]) => (
            <li key={project.id} className="projects__item">
              <article className="projects__card">
                <header className="projects__card-header">
                  <h3 className="projects__card-title">{project.title}</h3>
                  <p className="projects__card-summary">{project.description}</p>
                </header>

                <ul className="projects__tags" aria-label={`${project.title} tech stack`}>
                  {project.stack.map((tech) => (
                    <li key={tech} className="projects__tag">
                      {tech}
                    </li>
                  ))}
                </ul>

                {project.highlights?.length ? (
                  <ul className="projects__highlights" aria-label={`${project.title} highlights`}>
                    {project.highlights.map((h) => (
                      <li key={h} className="projects__highlight">
                        {h}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <footer className="projects__links" aria-label={`${project.title} links`}>
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      className="projects__link"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}