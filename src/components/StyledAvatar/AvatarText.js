import React from "react";
import PropTypes from "prop-types";

const AvatarText = ({ primary, secondary, customClassName }) => {
  return (
    <section
      className={`wrapper${customClassName ? ` ${customClassName}` : ""}`}
    >
      <h1>{primary}</h1>
      <h2>{secondary}</h2>
      <style jsx>{`
        section.wrapper {
          width: 400px;
        }
        h1 {
          margin: 35px 0px 5px 0px;
          font-size: 48px;
          font-family: Helvetica, Arial, sans-serif;
          color: #0e1a3c;
          text-align: center;
        }
        h2 {
          margin: 0;
          font-size: 38px;
          font-family: Helvetica, Arial, sans-serif;
          color: #0e1a3c;
          text-align: center;
        }
        @media screen and (max-width: 930px) {
          h1 {
            font-size: 30px;
            margin-top: 20px;
          }
          h2 {
            font-size: 18px;
          }
        }

        @media screen and (max-width: 400px) {
          h1 {
            font-size: 25px;
          }
          h2 {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default AvatarText;

AvatarText.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  customClassName: PropTypes.string,
};
