import React from "react";

// config
import sidebarConfig from "../../configs/sidebarConfig";

// components
import NavigationTabs from "../../components/NavigationTabs";
import Avatar from "../../components/Avatar";

const UpperNavigation = ({ goToPage, title, name, photo }) => {
  return (
    <section className="portfolio-UpperNavigation">
      <section className="portfolio-UpperNavigation-header-container">
        <div className="portfolio-UpperNavigation-avatar">
          <Avatar src={photo} alt="Bobbylee Ingalls" border={true} />
        </div>
        <section className="portfolio-UpperNavigation-info-container">
          <h1 className="portfolio-UpperNavigation-name">{name}</h1>
          <h2 className="portfolio-UpperNavigation-title">{title}</h2>
        </section>
      </section>
      <div className="portfolio-UpperNavigation-navigation-container">
        <NavigationTabs goToPage={goToPage} array={sidebarConfig} />
      </div>
    </section>
  );
};

export default UpperNavigation;
