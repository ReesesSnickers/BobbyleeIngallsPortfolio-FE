import React from "react";
import PropTypes from "prop-types";

// config
import socialConfig from "../../configs/socialConfig";
import { CONSTS } from "../../utility/constants/consts";

import AboutDivider from "../AboutDivider";
import Avatar from "../Avatar";
import SocialList from "../SocialList";

const AboutHeader = ({ photo }) => {
  return (
    <section className="aboutheader-wrapper">
      <div className="portfolio-about-avatar">
        <Avatar
          src={photo}
          alt={`Photo of ${CONSTS.FULL_NAME}`}
          name={CONSTS.FULL_NAME}
          title={CONSTS.JOB_TITLE}
          border
        />
      </div>
      <div role="navigation" className="portfolio-about-sociallist">
        <SocialList array={socialConfig} />
      </div>
      <AboutDivider />
      <style jsx>{`
        section.aboutheader-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
          transition: margin 0.3s linear;
        }
        .portfolio-about-avatar {
          padding-top: 10px;
        }
        .portfolio-about-sociallist {
          width: 550px;
          margin-top: 100px;
        }
        .portfolio-about-avatar .portfolio-avatar-name {
          transition: font 0.3s linear, margin 0.3s linear;
        }
        .portfolio-about-avatar .portfolio-avatar-title {
          transition: font 0.3s linear;
        }
        .portfolio-about-avatar .portfolio-avatar {
          transition: width 0.3s linear, height 0.3s linear;
        }
        .portfolio-about-avatar {
          transition: padding 0.3s linear;
        }
        @media screen and (max-width: 1024px) {
          .portfolio-about-sociallist {
            display: none;
          }
        }
        @media screen and (max-width: 930px) {
          /* .portfolio-about-sociallist {
            display: none;
          } */
          section.aboutheader-wrapper {
            margin-top: 80px;
            transition: margin 0.3s linear;
          }
          .portfolio-about-avatar .portfolio-avatar-name {
            font-size: 30px;
            margin-top: 20px;
            transition: font 0.3s linear, margin 0.3s linear;
          }
          .portfolio-about-avatar .portfolio-avatar-title {
            font-size: 18px;
            transition: font 0.3s linear;
          }
          .portfolio-about-avatar .portfolio-avatar {
            width: 250px;
            height: 250px;
            transition: width 0.3s linear, height 0.3s linear;
          }
        }
        @media screen and (max-width: 400px) {
          .portfolio-about-avatar .portfolio-avatar-name {
            font-size: 25px;
            transition: font 0.3s linear;
          }
          .portfolio-about-avatar .portfolio-avatar-title {
            font-size: 18px;
            transition: font 0.3s linear;
          }
          .portfolio-about-avatar .portfolio-avatar {
            width: 200px;
            height: 200px;
            transition: width 0.3s linear, height 0.3s linear;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHeader;

AboutHeader.propTypes = {
  // photo source string
  photo: PropTypes.string.isRequired,
};
