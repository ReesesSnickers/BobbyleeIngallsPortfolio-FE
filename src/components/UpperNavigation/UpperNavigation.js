import React from "react";
import PropTypes from "prop-types";

// config
import sidebarConfig from "../../configs/sidebarConfig";

// components
import NavigationTabs from "../../components/NavigationTabs";
import Avatar from "../../components/Avatar";

const UpperNavigation = ({ goToPage, title, name, photo, page }) => {
  return (
    <section role="navigation" className="portfolio-UpperNavigation">
      <section className="portfolio-UpperNavigation-header-container">
        <div className="portfolio-UpperNavigation-avatar">
          <Avatar src={photo} alt="Bobbylee Ingalls" border={true} />
        </div>
        <section className="portfolio-UpperNavigation-info-container">
          <h1 className="portfolio-UpperNavigation-name">{name}</h1>
          <h2 className="portfolio-UpperNavigation-title">{title}</h2>
        </section>
      </section>
      {page === "/UnknownRoute" && (
        <div className="portfolio-UpperNavigation-navigation-container">
          <NavigationTabs
            page={page}
            goToPage={goToPage}
            array={sidebarConfig}
          />
        </div>
      )}
    </section>
  );
};

export default UpperNavigation;

UpperNavigation.propTypes = {
  // function to go directly to a page
  goToPage: PropTypes.func.isRequired,
  // title for the avatar
  title: PropTypes.string.isRequired,
  // name for the avatar
  name: PropTypes.string.isRequired,
  // photo for the avatar
  photo: PropTypes.string.isRequired,
  // current page in the url
  page: PropTypes.string.isRequired
};
