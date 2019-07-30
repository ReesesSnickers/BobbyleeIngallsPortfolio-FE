import React from "react";

const ProjectCard = ({ onClick, title, logo }) => {
  return (
    <button className="portfolio-projectcard" onClick={onClick}>
      <img className="portfolio-projectcard-logo" src={logo} alt={title} />
      <h1 className="portfolio-projectcard-title">{title}</h1>
    </button>
  );
};

export default ProjectCard;
