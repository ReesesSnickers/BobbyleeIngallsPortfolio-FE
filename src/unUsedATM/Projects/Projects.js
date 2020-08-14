import React from "react";
import PropTypes from "prop-types";

import ProjectCardList from "../../components/ProjectsCardList";
import Loading from "../../components/Loading";

const Projects = ({ projectActions, projects }) => {
  if (projects.length === 0) {
    return <Loading load="projects" />;
  } else {
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
  }
};

export default Projects;

Projects.propTypes = {
  // redux project actions object
  projectActions: PropTypes.object,
  // array of project objects
  projects: PropTypes.array
};
