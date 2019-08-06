import React from "react";
import tempPhoto from "../../static/ProfilePhoto.jpg";

const ProjectCard = ({ title, logo }) => {
  return (
    <button className="portfolio-projectcard">
      <img
        className="portfolio-projectcard-logo"
        // src={logo}
        src={tempPhoto}
        alt={title}
      />
      <h1 className="portfolio-projectcard-title">{title}</h1>
    </button>
  );
};

export default ProjectCard;
