import React from "react";

import ProjectCard from "../ProjectCard";

const ProjectCardList = ({ array, onClick, setProject }) => {
  return (
    <section className="portfolio-projectcardList">
      {array.map((project, key) => {
        return (
          <ProjectCard
            key={key}
            title={project.title}
            logo={project.url}
            onClick={() => {
              setProject(project);
              onClick();
            }}
          />
        );
      })}
    </section>
  );
};

export default ProjectCardList;
