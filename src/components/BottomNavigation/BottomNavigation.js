import React from "react";
import PropTypes from "prop-types";

// config
import socialConfig from "../../configs/socialConfig";
// import sidebarConfig from "../../configs/sidebarConfig";

// components
import SocialList from "../../components/SocialList";
// import NavigationTabs from "../../components/NavigationTabs";

// constants
// import { ROUTES } from "../../utility/constants/routes";

const BottomNavigation = ({ page, goToPage }) => {
  return (
    <nav className="bottom">
      {/* pending additional pages */}
      {/* {page === ROUTES.ABOUT && (
        <NavigationTabs page={page} goToPage={goToPage} array={sidebarConfig} />
      )} */}
      <div className="social-container">
        <SocialList
          customClassName="bottomnavigation-sociallist"
          array={socialConfig}
        />
      </div>
      <style jsx>{`
        nav.bottom {
          width: 100%;
          position: fixed;
          bottom: 0px;
          background-color: #ffffff;
        }
        .social-container {
          display: none;
        }
        .social-container :global(bottomnavigation-sociallist) {
          margin-top: 0px !important;
        }
        .social-container > .portfolio-sociallist {
          justify-content: center;
        }
        .social-container :global(a) {
          margin: 0px 30px;
        }
        @media screen and (max-width: 1020px) {
          .social-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            background-color: #0e1a3c;
            padding: 20px 0px;
            width: 100%;
            transition: padding 0.3s linear;
          }
        }
        @media screen and (max-width: 930px) {
          .social-container {
            padding: 10px 0px;
            transition: padding 0.3s linear;
          }
        }
        @media screen and (max-width: 430px) {
          .social-container {
            padding: 10px 0px;
            transition: padding 0.3s linear;
          }
          .social-container :global(a) {
            margin: 0px 30px;
            height: 55px;
            width: 55px;
          }
        }
      `}</style>
    </nav>
  );
};

export default BottomNavigation;

BottomNavigation.propTypes = {
  page: PropTypes.string.isRequired,
  goToPage: PropTypes.func.isRequired,
};
