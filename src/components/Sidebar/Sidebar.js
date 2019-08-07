import React from "react";

// config
import socialConfig from "../../configs/socialConfig";
import sidebarConfig from "../../configs/sidebarConfig";

// components
import Avatar from "../../components/Avatar";
import SidebarTabs from "../../components/SidebarTabs";
import SocialList from "../../components/SocialList";

const Sidebar = ({ page, goToPage, goBack, photo }) => {
  return (
    <section className="portfolio-sidebar">
      {page !== "/Home" && (
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
      <div
        className={
          page === "/Home"
            ? "portfolio-sidebar-sidebartabs-homepage"
            : "portfolio-sidebar-sidebartabs"
        }
      >
        <SidebarTabs array={sidebarConfig} goToPage={goToPage} />
      </div>
      {page !== "/Home" && (
        <div className="portfolio-sidebar-sociallist-container">
          <SocialList array={socialConfig} />
        </div>
      )}
    </section>
  );
};

export default Sidebar;
