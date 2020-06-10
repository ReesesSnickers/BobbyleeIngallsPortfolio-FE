import React from "react";

import {
  paragraph1,
  paragraph2,
  paragraph3,
} from "../../configs/aboutMeConfig";

const AboutDescription = () => {
  return (
    <section className="description-wrapper">
      <p className="description">{paragraph1}</p>
      <p className="description">{paragraph2}</p>
      <p className="description">{paragraph3}</p>
      <style jsx>{`
        section.description-wrapper {
          font-size: 30px;
          margin-bottom: 100px;
          transition: padding 0.3s linear, margin 0.3s linear, font 0.3s linear;
        }

        p.description {
          padding: 0px 50px;
          margin: 100px 0px;
        }

        @media screen and (max-width: 1025px) {
          section.description-wrapper {
            margin-bottom: 0px;
          }
        }

        @media screen and (max-width: 400px) {
          section.description-wrapper {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutDescription;
