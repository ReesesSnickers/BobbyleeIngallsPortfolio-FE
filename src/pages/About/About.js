import React from "react";

// config
import socialConfig from "../../configs/socialConfig";
import {
  paragraph1,
  paragraph2,
  paragraph3
} from "../../configs/aboutMeConfig";

// components
import Avatar from "../../components/Avatar";
import SocialList from "../../components/SocialList";

const About = ({ photo }) => {
  return (
    <section className="portfolio-about-wrapper">
      <section className="portfolio-about-upper-wrapper">
        <div className="portfolio-about-avatar">
          <Avatar
            src={photo}
            alt="test"
            name="Bobbylee Ingalls"
            title="Software Engineer"
            border
          />
        </div>
        <div className="portfolio-about-sociallist">
          <SocialList array={socialConfig} />
        </div>
        <div className="portfolio-about-divider">
          <div className="portfolio-about-dividerline" />
          <div className="portfolio-about-dividercircle" />
          <div className="portfolio-about-dividerline" />
        </div>
      </section>
      <section className="portfolio-about-description-wrapper">
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
      </section>
    </section>
  );
};

export default About;
