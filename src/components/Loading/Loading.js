import React from "react";

const Loading = ({ load }) => {
  return (
    <section className="portfolio-loading">
      <h1>Sorry. Please standby while the {load} are retrieved.</h1>
    </section>
  );
};

export default Loading;
