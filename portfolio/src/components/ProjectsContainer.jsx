import React from 'react';

import projects from '../api/project.json';

import '../styles/components/projectscontainer.sass';

const ProjectsContainer = () => {
  return (
    <section>
      <h2>Projetos</h2>
      <div className="projects-content">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <img src={project.image} alt={project.name} />
            <div className="content" />
            <div className="cta">
              {project.source_code && (
                <a
                  href={project.source_code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Repositório
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Demonstração Online
                </a>
              )}
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag} className={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsContainer;
