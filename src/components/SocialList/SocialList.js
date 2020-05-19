import React from "react";
import PropTypes from "prop-types";

import IconButton from "../IconButton";

import { SOCIAL_MEDIA } from "../../utility/constants/socialMedia";

import { ReactComponent as FacebookLogo } from "../../assets/Facebook-Logo-Square.svg";
import { ReactComponent as TwitterLogo } from "../../assets/Twitter-Logo-WhiteOnBlue.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/LinkedIn-Icon-Square.svg";

const SocialList = ({ array }) => {
  return (
    <section className="portfolio-sociallist">
      {array.map((social, key) => {
        // constants
        const isFacebook = social.type === SOCIAL_MEDIA.FACEBOOK;
        const isTwitter = social.type === SOCIAL_MEDIA.TWITTER;
        const isLinkedIn = social.type === SOCIAL_MEDIA.LINKEDIN;
        let icon = isFacebook ? (
          <FacebookLogo />
        ) : isTwitter ? (
          <TwitterLogo />
        ) : isLinkedIn ? (
          <LinkedInLogo />
        ) : undefined;
        return (
          <IconButton
            className="portfolio-sociallist-iconbutton"
            key={key}
            icon={icon}
            href={social.url}
            social={social.type}
          />
        );
      })}
    </section>
  );
};

export default SocialList;

SocialList.propTypes = {
  // social options array
  array: PropTypes.array,
};
