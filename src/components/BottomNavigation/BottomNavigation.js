import React from "react";
import PropTypes from "prop-types";

// config
import socialConfig from "../../configs/socialConfig";
import sidebarConfig from "../../configs/sidebarConfig";

// components
import SocialList from "../../components/SocialList";
import NavigationTabs from "../../components/NavigationTabs";

const BottomNavigation = ({ page, goToPage }) => {
  return (
    <section className="portfolio-BottomNavigation">
      {/* {page === "/About" && (
        <div className="portfolio-BottomNavigation-navigation-container">
          <NavigationTabs
            page={page}
            goToPage={goToPage}
            array={sidebarConfig}
          />
        </div>
      )} */}
      <div className="portfolio-BottomNavigation-social-container">
        <SocialList array={socialConfig} />
      </div>
    </section>
  );
};

export default BottomNavigation;

BottomNavigation.propTypes = {
  // current page in url
  page: PropTypes.string.isRequired,
  // function to goto a specific page
  goToPage: PropTypes.func.isRequired
};
