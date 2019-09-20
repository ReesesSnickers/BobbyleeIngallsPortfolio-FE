import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ src, alt, border, name, title }) => {
  return (
    <section className="portfolio-avatar-wrapper">
      <section
        className={`portfolio-avatar ${border && "portfolio-avatar-border"}`}
      >
        <img className="portfolio-avatar-image" src={src} alt={alt} />
      </section>
      <section className="portfolio-avatar-user">
        <h1 className="portfolio-avatar-name">{name}</h1>
        <h2 className="portfolio-avatar-title">{title}</h2>
      </section>
    </section>
  );
};

export default Avatar;

Avatar.propTypes = {
  // path to the avatar image
  src: PropTypes.string.isRequired,
  // alternate text for if the image cannot be found
  alt: PropTypes.string,
  // boolean for if there is a border around the image or not
  border: PropTypes.bool,
  // Avater name text
  name: PropTypes.string,
  // Avatar title text
  title: PropTypes.string
};

Avatar.defaultProps = {
  alt: "Profile Photo",
  border: false
};
