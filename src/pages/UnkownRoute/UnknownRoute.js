import React from "react";
import { Messages } from "../../utility/constants/messages";

const UnknownRoute = () => {
  return (
    <section className="portfolio-unknownroute">
      <h1 className="portfolio-unknownroute-error">
        {Messages.BAD_ROUTE_TITLE}
      </h1>
      <h2 className="portfolio-unknownroute-message">
        {Messages.BAD_ROUTE_ACTION}
      </h2>
    </section>
  );
};

export default UnknownRoute;
