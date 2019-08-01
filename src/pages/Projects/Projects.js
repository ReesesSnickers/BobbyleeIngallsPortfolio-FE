import React from "react";

import ProjectCardList from "../../components/ProjectsCardList";

const Projects = ({ projectActions, projects }) => {
  return (
    <section className="portfolio-projects-wrapper">
      <div className="portfolio-projects-list">
        <ProjectCardList
          array={projects}
          setProject={projectActions.setProject}
        />
      </div>
    </section>
  );
};

export default Projects;
