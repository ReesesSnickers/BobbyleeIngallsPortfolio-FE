import React from "react";

const ProjectPage = ({ match, history }) => {
  const project = history.location.state.projects.find(
    project => project._id === match.params.projectId
  );
  return (
    <section className="portfolio-projectpage-wrapper">
      <section className="portfolio-projectpage-wrapper">
        <section className="portfolio-projectpage-header">
          <div className="portfolio-projectpage-header-createdclosegroup">
            <h2 className="portfolio-projectpage-header-created">
              {project.created}
            </h2>
            <button
              className="portfolio-projectpage-header-exit"
              onClick={() => history.goBack()}
            >
              X
            </button>
          </div>
          <h1 className="portfolio-projectpage-header-name">{project.title}</h1>
          <span className="portfolio-projectpage-header-description">
            {project.description}
          </span>
        </section>
        <div className="portfolio-projectpage-header-createdlivecodegroup">
          {project.sitePreview !== "" && (
            <a
              href={project.sitePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-projectpage-header-createdclosegroup-livecode"
            >
              Preview Site
            </a>
          )}
          {project.codeLocation !== "" && (
            <a
              href={project.codeLocation}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-projectpage-header-createdclosegroup-livecode"
            >
              View Code
            </a>
          )}
        </div>
        <div className="portfolio-projectpage-photo-wrapper">
          <img
            className="portfolio-projectpage-photo"
            src={require(`../../${project.fullScreenPhoto}`)}
            alt={project.title}
          />
        </div>
      </section>
    </section>
  );
};

export default ProjectPage;
