import React from "react";
import PropTypes from "prop-types";

const IconButton = ({ icon, href, social }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Redirect to Bobbylee's ${social} profile`}
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
  href: PropTypes.string,
  // what social media source is provided
  social: PropTypes.string
};
