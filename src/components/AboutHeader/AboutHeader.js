import React from "react";
import PropTypes from "prop-types";

// config
import socialConfig from "../../configs/socialConfig";
import Consts from "../../utility/constants/consts";

import AboutDivider from "../AboutDivider";
import StyledAvatar from "../StyledAvatar";
import SocialList from "../SocialList";

const AboutHeader = ({ photo }) => {
  return (
    <section>
      <StyledAvatar
        src={photo}
        alt={`Photo of ${Consts.FULL_NAME}`}
        name={Consts.FULL_NAME}
        title={Consts.JOB_TITLE}
        border
      />
      <div className="sociallist-wrapper">
        <SocialList
          customClassName="aboutheader-sociallist"
          array={socialConfig}
        />
      </div>
      <AboutDivider />
      <style jsx>{`
        section {
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .sociallist-wrapper :global(.aboutheader-sociallist) {
          margin-top: 100px;
        }
        @media screen and (max-width: 1024px) {
          .sociallist-wrapper :global(.aboutheader-sociallist) {
            display: none;
          }
        }
        @media screen and (max-width: 930px) {
          section {
            margin-top: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutHeader;

AboutHeader.propTypes = {
  photo: PropTypes.string.isRequired,
};
