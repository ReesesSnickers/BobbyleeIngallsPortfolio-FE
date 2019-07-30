import React from "react";

// assets
import UserPhoto from "../../assets/testavatar.jpg";

// components
import Avatar from "../../components/Avatar";
import SidebarTabs from "../../components/SidebarTabs";
import SocialList from "../../components/SocialList";

const Sidebar = ({ page, goToPage, goBack }) => {
  let routeArray = ["Resume", "Projects", "Blog"];
  return (
    <section className="portfolio-sidebar">
      {page !== "/Home" && (
        <>
          <button onClick={goBack} className="portfolio-sidebar-backbutton">
            Back
          </button>
          <div className="portfolio-sidebar-avatar">
            <Avatar
              src={UserPhoto}
              alt="test"
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
        <SidebarTabs array={routeArray} goToPage={goToPage} />
      </div>
      {page !== "/Home" && (
        <div className="portfolio-sidebar-sociallist-container">
          <SocialList
            array={[
              {
                type: "Facebook",
                url:
                  "https://www.facebook.com/Bobbylee-Ingalls-102087861139492/"
              },
              { type: "Twitter", url: "https://twitter.com/BobbyleeIngalls" },
              {
                type: "LinkedIn",
                url: "https://www.linkedin.com/in/bobbyleeingalls/"
              }
            ]}
          />
        </div>
      )}
    </section>
  );
};

export default Sidebar;
