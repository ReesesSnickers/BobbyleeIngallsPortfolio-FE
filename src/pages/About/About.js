import React from "react";
import PropTypes from "prop-types";

// components
import AboutDescription from "../../components/AboutDescription";
import AboutHeader from "../../components/AboutHeader";

const About = ({ photo }) => {
  return (
    <section className="portfolio-about-wrapper">
      <AboutHeader photo={photo} />
      <AboutDescription />
    </section>
  );
};

export default About;

About.propTypes = {
  // photo source string
  photo: PropTypes.string.isRequired,
};
