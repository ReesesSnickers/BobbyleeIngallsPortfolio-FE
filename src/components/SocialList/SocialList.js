import React from "react";
import PropTypes from "prop-types";

import IconButton from "../IconButton";

import { SOCIAL_MEDIA } from "../../utility/constants/socialMedia";

import { ReactComponent as FacebookLogo } from "../../assets/Facebook-Logo-Square.svg";
import { ReactComponent as TwitterLogo } from "../../assets/Twitter-Logo-WhiteOnBlue.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/LinkedIn-Icon-Square.svg";

const SocialList = ({ array, customClassName }) => {
  return (
    <nav className={customClassName}>
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
            key={key}
            icon={icon}
            href={social.url}
            social={social.type}
          />
        );
      })}
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          width: 550px;
        }
      `}</style>
    </nav>
  );
};

export default SocialList;

SocialList.propTypes = {
  array: PropTypes.array,
  customClassName: PropTypes.string,
};
SocialList.defaultProps = {
  customClassName: "",
};
