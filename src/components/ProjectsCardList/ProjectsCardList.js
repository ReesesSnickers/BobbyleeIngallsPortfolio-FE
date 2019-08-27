import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import ProjectCard from "../ProjectCard";

const ProjectCardList = ({ array }) => {
  return (
    <section className="portfolio-projectcardList">
      {array.map((project, key) => {
        return (
          <Link
            key={key}
            to={{
              pathname: `/Projects/${project._id}`,
              state: { projects: array }
            }}
          >
            <ProjectCard title={project.title} logo={project.fullScreenPhoto} />
          </Link>
        );
      })}
    </section>
  );
};

export default ProjectCardList;

ProjectCardList.propTypes = {
  // Projects array
  array: PropTypes.shape([
    {
      title: PropTypes.string.isRequired,
      fullScreenPhoto: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired
    }
  ])
};
