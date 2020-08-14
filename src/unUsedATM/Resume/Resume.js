import React from "react";
import PropTypes from "prop-types";

const Resume = ({ goBack }) => {
  return (
    <section className="portfolio-resume-wrapper">
      <button onClick={() => goBack()}>back</button>Resume
    </section>
  );
};

export default Resume;

Resume.propTypes = {
  // function to go back a page
  goBack: PropTypes.func.isRequired
};
