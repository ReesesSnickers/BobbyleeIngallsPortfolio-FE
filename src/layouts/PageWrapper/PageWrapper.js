import React from "react";

// Components
import Sidebar from "../../components/Sidebar";

const PageWrapper = ({ goBack, goToPage, children, page }) => {
  return (
    <section className="portfolio-wrapper">
      <div>
        <Sidebar goBack={goBack} page={page} goToPage={goToPage} />
      </div>
      <div className="portfolio-wrapper-mainpage">{children}</div>
    </section>
  );
};

export default PageWrapper;
