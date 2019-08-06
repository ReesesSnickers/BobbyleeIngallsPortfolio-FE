import React from "react";

// config
import socialConfig from "../../configs/socialConfig";

// components
import Avatar from "../../components/Avatar";
import SocialList from "../../components/SocialList";

const Home = ({ photo }) => {
  return (
    <section className="portfolio-home-wrapper">
      <div className="portfolio-home-avatar">
        <Avatar
          src={photo}
          alt="test"
          name="Bobbylee Ingalls"
          title="Software Engineer"
          border
        />
      </div>
      <div className="portfolio-home-sociallist">
        <SocialList array={socialConfig} />
      </div>
    </section>
  );
};

export default Home;
