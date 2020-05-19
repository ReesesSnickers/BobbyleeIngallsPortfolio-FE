import React from "react";
import PropTypes from "prop-types";

// config
import socialConfig from "../../configs/socialConfig";
import sidebarConfig from "../../configs/sidebarConfig";

// components
import Avatar from "../../components/Avatar";
import SidebarTabs from "../../components/SidebarTabs";
import SocialList from "../../components/SocialList";

// constants
import { ROUTES } from "../../utility/constants/routes";

const Sidebar = ({ page, goToPage, goBack, photo }) => {
  const isAbooutPage = page === ROUTES.ABOUT;
  const IsUnkownPage = page === ROUTES.UNKNOWN;
  return (
    <section role="contentinfo" className="portfolio-sidebar">
      {!isAbooutPage && (
        <>
          <button onClick={goBack} className="portfolio-sidebar-backbutton">
            Back
          </button>
          <div className="portfolio-sidebar-avatar">
            <Avatar
              src={photo}
              alt="Bobbylee Ingalls"
              name="Bobbylee Ingalls"
              title="Software Engineer"
            />
          </div>
        </>
      )}
      {IsUnkownPage && (
        <div
          className={
            isAbooutPage
              ? "portfolio-sidebar-sidebartabs-homepage"
              : "portfolio-sidebar-sidebartabs"
          }
        >
          <SidebarTabs array={sidebarConfig} goToPage={goToPage} />
        </div>
      )}
      {!isAbooutPage && (
        <div className="portfolio-sidebar-sociallist-container">
          <SocialList array={socialConfig} />
        </div>
      )}
    </section>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  // current page in the url
  page: PropTypes.string.isRequired,
  // function to go to a page directly
  goToPage: PropTypes.func.isRequired,
  // function to go back a page
  goBack: PropTypes.func.isRequired,
  // string to the image source
  photo: PropTypes.string.isRequired,
};
