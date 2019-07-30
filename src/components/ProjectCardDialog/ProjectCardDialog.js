import React from "react";

const ProjectCardDialog = ({ onClick, project }) => {
  return (
    <section className="portfolio-projectscarddialog-wrapper">
      <section className="portfolio-projectscarddialog-header">
        <div className="portfolio-projectscarddialog-header-createdclosegroup">
          <h2 className="portfolio-projectscarddialog-header-created">
            {project.created}
          </h2>
          <button
            className="portfolio-projectscarddialog-header-exit"
            onClick={onClick}
          >
            X
          </button>
        </div>
        <h1 className="portfolio-projectscarddialog-header-name">
          {project.title}
        </h1>
        <span className="portfolio-projectscarddialog-header-description">
          {project.description}
        </span>
      </section>
      <div className="portfolio-projectscarddialog-header-createdlivecodegroup">
        {project.sitePreview !== "" && (
          <a
            href={project.sitePreview}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-projectscarddialog-header-createdclosegroup-livecode"
          >
            Preview Site
          </a>
        )}
        {project.codeLocation !== "" && (
          <a
            href={project.codeLocation}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-projectscarddialog-header-createdclosegroup-livecode"
          >
            View Code
          </a>
        )}
      </div>
      <div className="portfolio-projectscarddialog-photo">
        <img src={project.fullScreenPhoto} alt={project.title} />
      </div>
    </section>
  );
};

export default ProjectCardDialog;
