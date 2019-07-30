import React from "react";

const IconButton = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-IconButton"
    >
      {icon}
    </a>
  );
};

export default IconButton;
