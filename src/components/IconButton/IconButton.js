import React from "react";
import PropTypes from "prop-types";

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

IconButton.propTypes = {
  // icon to be shown
  icon: PropTypes.node.isRequired,
  // url string for the button to navigate to
  href: PropTypes.string
};
