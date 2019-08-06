import React from "react";

import IconButton from "../IconButton";

import { ReactComponent as FacebookLogo } from "../../assets/Facebook-Logo-Square.svg";
import { ReactComponent as TwitterLogo } from "../../assets/Twitter-Logo-WhiteOnBlue.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/LinkedIn-Icon-Square.svg";

const SocialList = ({ array }) => {
  return (
    <section className="portfolio-sociallist">
      {array.map((social, key) => {
        let icon =
          social.type === "Facebook" ? (
            <FacebookLogo />
          ) : social.type === "Twitter" ? (
            <TwitterLogo />
          ) : social.type === "LinkedIn" ? (
            <LinkedInLogo />
          ) : (
            undefined
          );
        return <IconButton key={key} icon={icon} href={social.url} />;
      })}
    </section>
  );
};

export default SocialList;