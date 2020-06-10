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
    <section className="portfolio-about-upper-wrapper">
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
    </section>
  );
};

export default AboutHeader;

AboutHeader.propTypes = {
  // photo source string
  photo: PropTypes.string.isRequired,
};
