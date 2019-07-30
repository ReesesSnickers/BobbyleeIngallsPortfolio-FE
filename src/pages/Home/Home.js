import React from "react";

// components
import Avatar from "../../components/Avatar";
import SocialList from "../../components/SocialList";

// assets
import UserPhoto from "../../assets/testavatar.jpg";

const Home = ({ goToPage }) => {
  return (
    <section className="portfolio-home-wrapper">
      <div className="portfolio-home-avatar">
        <Avatar
          src={UserPhoto}
          alt="test"
          name="Bobbylee Ingalls"
          title="Software Engineer"
          border
        />
      </div>
      <div className="portfolio-home-sociallist">
        <SocialList
          array={[
            {
              type: "Facebook",
              url: "https://www.facebook.com/Bobbylee-Ingalls-102087861139492/"
            },
            { type: "Twitter", url: "https://twitter.com/BobbyleeIngalls" },
            {
              type: "LinkedIn",
              url: "https://www.linkedin.com/in/bobbyleeingalls/"
            }
          ]}
        />
      </div>
    </section>
  );
};

export default Home;
