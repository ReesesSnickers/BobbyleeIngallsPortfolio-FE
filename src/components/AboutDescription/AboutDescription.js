import React from "react";

import {
  paragraph1,
  paragraph2,
  paragraph3,
} from "../../configs/aboutMeConfig";

const AboutDescription = () => {
  return (
    <section className="portfolio-about-description-wrapper">
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
      <p>{paragraph3}</p>
    </section>
  );
};

export default AboutDescription;
