import React from "react";
import PropTypes from "prop-types";

// components
import AboutDescription from "../../components/AboutDescription";
import AboutHeader from "../../components/AboutHeader";

const About = ({ photo }) => {
  return (
    <section className="about-wrapper">
      <AboutHeader photo={photo} />
      <AboutDescription />
      <style jsx>{`
        section.about-wrapper {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default About;

About.propTypes = {
  // photo source string
  photo: PropTypes.string.isRequired,
};
