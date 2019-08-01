import React from "react";

const ProjectCard = ({ title, logo }) => {
  return (
    <button className="portfolio-projectcard">
      <img className="portfolio-projectcard-logo" src={logo} alt={title} />
      <h1 className="portfolio-projectcard-title">{title}</h1>
    </button>
  );
};

export default ProjectCard;
