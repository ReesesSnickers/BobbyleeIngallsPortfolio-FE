import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ title, logo }) => {
  return (
    <button className="portfolio-projectcard">
      <img
        className="portfolio-projectcard-logo"
        src={require(`../../${logo}`)}
        alt={title}
      />
      <h1 className="portfolio-projectcard-title">{title}</h1>
    </button>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  // title to the project
  title: PropTypes.string,
  // image string to the project
  logo: PropTypes.string
};
