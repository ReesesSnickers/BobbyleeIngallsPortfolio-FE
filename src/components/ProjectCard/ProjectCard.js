import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ title, logo }) => {
  return (
    <button className="button">
      <img src={require(`../../${logo}`)} alt={title} />
      <h1>{title}</h1>
      <style jsx>{`
        .button {
          border: none;
          background-color: #ffffff;
          color: #0e1a3c;
          padding: 0px;
          margin-left: 40px;
          margin-right: 40px;
          margin-top: 20px;
        }
        .button:hover {
          cursor: pointer;
        }
        .button:focus > h1 {
          border: none;
          background-color: #ffffff;
          color: #eb21d4;
        }
        .button:hover > h1 {
          border: none;
          background-color: #ffffff;
          color: #eb21d4;
          cursor: pointer;
        }
        img {
          min-width: 255px;
          min-height: 255px;
          max-width: 255px;
          max-height: 255px;
          width: 255px;
          height: 255px;
          object-fit: fill;
        }
        h1 {
          max-width: 255px;
          font-size: 30px;
          font-family: Helvetica, Arial, sans-serif;
          margin: 10px 0px 0px 0px;
        }

        @media screen and (max-width: 1544px) {
          img {
            min-width: 205px;
            min-height: 205px;
            max-width: 205px;
            max-height: 205px;
            width: 205px;
            height: 205px;
          }
          h1 {
            max-width: 205px;
            font-size: 28px;
          }
        }

        @media screen and (max-width: 1331px) {
          img {
            min-width: 180px;
            min-height: 180px;
            max-width: 180px;
            max-height: 180px;
            width: 180px;
            height: 180px;
          }
          h1 {
            max-width: 180px;
            font-size: 28px;
          }
        }

        @media screen and (max-width: 1220px) {
          img {
            min-width: 155px;
            min-height: 155px;
            max-width: 155px;
            max-height: 155px;
            width: 155px;
            height: 155px;
          }
          h1 {
            max-width: 155px;
            font-size: 20px;
            margin: 7px 0px 0px 0px;
          }
        }

        @media screen and (max-width: 1030px) {
          img {
            min-width: 135px;
            min-height: 135px;
            max-width: 135px;
            max-height: 135px;
            width: 135px;
            height: 135px;
          }
          h1 {
            max-width: 135px;
            font-size: 20px;
          }
        }

        @media screen and (max-width: 1030px) {
          img {
            min-width: 125px;
            min-height: 125px;
            max-width: 125px;
            max-height: 125px;
            width: 125px;
            height: 125px;
          }
          h1 {
            max-width: 125px;
            font-size: 20px;
          }
        }

        @media screen and (max-width: 930px) {
          img {
            min-width: 205px;
            min-height: 205px;
            max-width: 205px;
            max-height: 205px;
            width: 205px;
            height: 205px;
          }
          h1 {
            max-width: 205px;
            font-size: 25px;
            margin: 10px 0px 0px 0px;
          }
        }

        @media screen and (max-width: 866px) {
          .button {
            margin-left: 30px;
            margin-right: 30px;
          }
        }

        @media screen and (max-width: 806px) {
          .button {
            margin-left: 20px;
            margin-right: 20px;
          }
        }

        @media screen and (max-width: 746px) {
          img {
            min-width: 180px;
            min-height: 180px;
            max-width: 180px;
            max-height: 180px;
            width: 180px;
            height: 180px;
          }
          h1 {
            max-width: 180px;
            font-size: 28px;
          }
        }

        @media screen and (max-width: 671px) {
          img {
            min-width: 155px;
            min-height: 155px;
            max-width: 155px;
            max-height: 155px;
            width: 155px;
            height: 155px;
          }
          h1 {
            max-width: 155px;
            font-size: 20px;
            margin: 7px 0px 0px 0px;
          }
        }

        @media screen and (max-width: 596px) {
          img {
            min-width: 135px;
            min-height: 135px;
            max-width: 135px;
            max-height: 135px;
            width: 135px;
            height: 135px;
          }
          h1 {
            max-width: 135px;
            font-size: 20px;
          }
        }

        @media screen and (max-width: 536px) {
          img {
            min-width: 125px;
            min-height: 125px;
            max-width: 125px;
            max-height: 125px;
            width: 125px;
            height: 125px;
          }
          h1 {
            max-width: 125px;
            font-size: 20px;
          }
        }

        @media screen and (max-width: 506px) {
          img {
            min-width: 180px;
            min-height: 180px;
            max-width: 180px;
            max-height: 180px;
            width: 180px;
            height: 180px;
          }
          h1 {
            max-width: 180px;
            font-size: 20px;
          }
        }

        @media screen and (max-width: 450px) {
          img {
            min-width: 155px;
            min-height: 155px;
            max-width: 155px;
            max-height: 155px;
            width: 155px;
            height: 155px;
          }
          h1 {
            max-width: 155px;
            font-size: 20px;
            margin: 7px 0px 0px 0px;
          }
        }

        @media screen and (max-width: 397px) {
          img {
            min-width: 135px;
            min-height: 135px;
            max-width: 135px;
            max-height: 135px;
            width: 135px;
            height: 135px;
          }
          h1 {
            max-width: 135px;
            font-size: 20px;
          }
        }

        @media screen and (max-width: 357px) {
          img {
            min-width: 125px;
            min-height: 125px;
            max-width: 125px;
            max-height: 125px;
            width: 125px;
            height: 125px;
          }
          h1 {
            max-width: 125px;
            font-size: 20px;
          }
        }

        @media screen and (max-width: 337px) {
          img {
            min-width: 105px;
            min-height: 105px;
            max-width: 105px;
            max-height: 105px;
            width: 105px;
            height: 105px;
          }
          h1 {
            max-width: 105px;
            font-size: 15px;
          }
        }
      `}</style>
    </button>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
};
