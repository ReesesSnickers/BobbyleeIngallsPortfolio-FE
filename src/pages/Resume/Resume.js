import React from "react";

const Resume = ({ goBack }) => {
  return (
    <section className="portfolio-resume-wrapper">
      <button onClick={() => goBack()}>back</button>Resume
    </section>
  );
};

export default Resume;
