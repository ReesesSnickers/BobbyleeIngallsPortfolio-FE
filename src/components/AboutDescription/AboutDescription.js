import React from "react";

import {
  paragraph1,
  paragraph2,
  paragraph3,
} from "../../configs/aboutMeConfig";

const AboutDescription = () => {
  return (
    <section>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
      <p>{paragraph3}</p>
      <style jsx>{`
        section {
          font-size: 30px;
          margin-bottom: 100px;
        }

        p {
          padding: 0px 50px;
          margin: 100px 0px;
        }

        @media screen and (max-width: 1025px) {
          section {
            margin-bottom: 0px;
          }
        }

        @media screen and (max-width: 400px) {
          section {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutDescription;
