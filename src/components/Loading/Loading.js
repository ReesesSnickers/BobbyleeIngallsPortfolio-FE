import React from "react";
import PropTypes from "prop-types";

const Loading = ({ load }) => {
  return (
    <section>
      <h1>Sorry. Please standby while the {load} are retrieved.</h1>
      <style jsx>{`
        section {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          text-align: center;
        }
        h1 {
          font-size: 40px;
          font-family: Helvetica, Arial, sans-serif;
          color: #0e1a3c;
          margin: 0px 40px;
        }
        @media screen and (max-width: 930px) {
          section {
            margin-top: 200px;
          }
        }
        @media screen and (max-width: 570px) {
          h1 {
            font-size: 30px;
            margin: 0px 40px;
          }
        }
        @media screen and (max-width: 430px) {
          h1 {
            font-size: 25px;
            margin: 0px 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Loading;

Loading.propTypes = {
  load: PropTypes.string.isRequired,
};
