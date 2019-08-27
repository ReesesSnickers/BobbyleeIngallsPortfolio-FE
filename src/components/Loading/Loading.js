import React from "react";
import PropTypes from "prop-types";

const Loading = ({ load }) => {
  return (
    <section className="portfolio-loading">
      <h1>Sorry. Please standby while the {load} are retrieved.</h1>
    </section>
  );
};

export default Loading;

Loading.propTypes = {
  // text of what is being retrieved
  load: PropTypes.string.isRequired
};
