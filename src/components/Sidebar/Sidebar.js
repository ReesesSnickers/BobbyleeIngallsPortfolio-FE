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
    <section>
      {!isAbooutPage && (
        <>
          <button onClick={goBack} className="portfolio-sidebar-backbutton">
            Back
          </button>
          <div className="avatar-wrapper">
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
        <SidebarTabs array={sidebarConfig} goToPage={goToPage} />
      )}
      {!isAbooutPage && (
        <div className="sociallist-wrapper">
          <SocialList
            customClassName="sidebar-sociallist"
            array={socialConfig}
          />
        </div>
      )}
      <style jsx>{`
        section {
          background-color: #0e1a3c;
          width: 452px;
          height: 100%;
          position: fixed;
        }
        .avatar-wrapper {
          padding-top: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        :global(.MuiAvatar-root) {
          width: 255px;
          height: 255px;
        }
        .avatar-wrapper :global(h1) {
          color: #fff;
          font-size: 25px;
          margin: 25px 0px 5px 0px;
        }
        .avatar-wrapper :global(h2) {
          color: #fff;
          font-size: 20px;
        }
        .portfolio-sidebar-backbutton {
          margin-top: 20px;
          margin-left: 20px;
          font-size: 30px;
          font-family: Helvetica, Arial, sans-serif;
          border: none;
          background-color: transparent;
          color: #fff;
        }
        .portfolio-sidebar-backbutton:hover {
          cursor: pointer;
          color: #eb21d4;
          font-weight: bold;
        }
        .portfolio-sidebar-backbutton:focus {
          /* outline: none; */
          color: #eb21d4;
          font-weight: bold;
        }
        .sociallist-wrapper {
          margin-bottom: 30px;
        }

        .sociallist-wrapper :global(.sidebar-sociallist) {
          width: auto;
          margin-top: 100px;
        }

        @media screen and (max-width: 1300px) {
          section {
            width: 352px;
          }
        }
        @media screen and (max-width: 1100px) {
          section {
            width: 302px;
          }
          :global(.MuiAvatar-root) {
            width: 220px;
            height: 220px;
          }
        }
        @media screen and (max-width: 1024px) {
          section {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  page: PropTypes.string.isRequired,
  goToPage: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired,
};
