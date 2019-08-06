import React from "react";

// Components
import Sidebar from "../../components/Sidebar";

const PageWrapper = ({ goBack, goToPage, children, page, sidebarPhoto }) => {
  return (
    <section className="portfolio-wrapper">
      <div>
        <Sidebar
          goBack={goBack}
          page={page}
          goToPage={goToPage}
          photo={sidebarPhoto}
        />
      </div>
      <div className="portfolio-wrapper-mainpage">{children}</div>
    </section>
  );
};

export default PageWrapper;
