import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProjectCardList from "../../components/ProjectsCardList";
import Loading from "../../components/Loading";

const Projects = ({ projectActions, projects }) => {
  const noProjectsLoaded = projects.length === 0;
  const [requestedProjectsFromBE, setRequestedProjectsFromBE] = useState(false);

  useEffect(() => {
    if (!requestedProjectsFromBE) {
      projectActions.fetchProjects().then(() => {
        setRequestedProjectsFromBE(true);
      });
    }
  }, []);

  return (
    <>
      {noProjectsLoaded ? (
        <Loading load="projects" />
      ) : (
        <section className="wrapper">
          <ProjectCardList
            array={projects}
            setProject={projectActions.setProject}
          />
        </section>
      )}
      <style jsx>{`
        .wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Projects;

Projects.propTypes = {
  projectActions: PropTypes.object,
  projects: PropTypes.array,
};
