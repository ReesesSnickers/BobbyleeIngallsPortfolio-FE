import React from "react";

const UnknownRoute = () => {
  return (
    <section className="portfolio-unknownroute">
      <h1 className="portfolio-unknownroute-error">
        The route you attempted to reach either does not exist.
      </h1>
      <h2 className="portfolio-unknownroute-message">
        Please verify you spelled the route correctly or use one of the links on
        the side.
      </h2>
    </section>
  );
};

export default UnknownRoute;
