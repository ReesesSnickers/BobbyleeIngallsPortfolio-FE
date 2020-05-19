import React from "react";
import PropTypes from "prop-types";

// Components
import Sidebar from "../../components/Sidebar";
import BottomNavigation from "../../components/BottomNavigation";
import UpperNavigation from "../../components/UpperNavigation";

// constants
import { ROUTES } from "../../utility/constants/routes";
const PageWrapper = ({ goBack, goToPage, children, page, sidebarPhoto }) => {
  const isAbooutPage = page === ROUTES.ABOUT;
  return (
    <section className="portfolio-wrapper">
      {!isAbooutPage && (
        <div className="portfolio-wrapper-topnavigation-container">
          <UpperNavigation
            page={page}
            goToPage={goToPage}
            name="Bobbylee Ingalls"
            title="Software Engineer"
            photo={sidebarPhoto}
          />
        </div>
      )}
      <div className="portfolio-wrapper-sidebar-container">
        <Sidebar
          goBack={goBack}
          page={page}
          goToPage={goToPage}
          photo={sidebarPhoto}
        />
      </div>
      <div role="main" className="portfolio-wrapper-mainpage">
        {children}
      </div>
      <div className="portfolio-wrapper-bottomnavigation-container">
        <BottomNavigation page={page} goToPage={goToPage} />
      </div>
    </section>
  );
};

export default PageWrapper;

PageWrapper.propTypes = {
  // function to go back
  goBack: PropTypes.func.isRequired,
  // function to go directly to a page
  goToPage: PropTypes.func.isRequired,
  // current page in the url
  page: PropTypes.string,
  // image source string
  sidebarPhoto: PropTypes.string,
  // child to be passed into wrapper
  children: PropTypes.node,
};
