import React from "react";

// Components
import Sidebar from "../../components/Sidebar";
import BottomNavigation from "../../components/BottomNavigation";
import UpperNavigation from "../../components/UpperNavigation";

const PageWrapper = ({ goBack, goToPage, children, page, sidebarPhoto }) => {
  return (
    <section className="portfolio-wrapper">
      {page !== "/About" && (
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
      <div className="portfolio-wrapper-mainpage">{children}</div>
      <div className="portfolio-wrapper-bottomnavigation-container">
        <BottomNavigation page={page} goToPage={goToPage} />
      </div>
    </section>
  );
};

export default PageWrapper;
