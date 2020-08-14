import React from "react";
import PropTypes from "prop-types";

const IconButton = ({ icon, href, social }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Redirect to Bobbylee's ${social} profile`}
    >
      {icon}
      <style jsx>{`
        a {
          width: 80px;
          height: 80px;
          border-radius: 13px;
          padding: 0px;
          border: none;
          cursor: pointer;
        }
        a :global(svg) {
          border-radius: 10px;
        }
        a:focus {
          width: 82px;
          height: 82px;
          border: 2px solid #eb21d4;
          box-shadow: 0px 0px 5px #eb21d4;
        }
      `}</style>
    </a>
  );
};

export default IconButton;

IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  href: PropTypes.string,
  social: PropTypes.string,
};
