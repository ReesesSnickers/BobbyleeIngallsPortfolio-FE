import React from "react";

// config
import socialConfig from "../../configs/socialConfig";
import sidebarConfig from "../../configs/sidebarConfig";

// components
import SocialList from "../../components/SocialList";
import NavigationTabs from "../../components/NavigationTabs";

const BottomNavigation = ({ page, goToPage }) => {
  return (
    <section className="portfolio-BottomNavigation">
      {page === "/Home" && (
        <div className="portfolio-BottomNavigation-navigation-container">
          <NavigationTabs goToPage={goToPage} array={sidebarConfig} />
        </div>
      )}
      <div className="portfolio-BottomNavigation-social-container">
        <SocialList array={socialConfig} />
      </div>
    </section>
  );
};

export default BottomNavigation;
