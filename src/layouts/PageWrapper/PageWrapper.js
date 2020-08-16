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
      <Sidebar
        goBack={goBack}
        page={page}
        goToPage={goToPage}
        photo={sidebarPhoto}
      />
      <main className="mainpage">{children}</main>
      <div className="portfolio-wrapper-bottomnavigation-container">
        <BottomNavigation page={page} goToPage={goToPage} />
      </div>
      <style jsx>{`
        section {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: row;
        }
        main.mainpage {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          position: relative;
        }
        .portfolio-wrapper-bottomnavigation-container {
          display: none;
        }
        .portfolio-wrapper-topnavigation-container {
          display: none;
        }

        @media screen and (max-width: 1300px) {
          main.mainpage {
            margin-left: 352px;
          }
        }

        @media screen and (max-width: 1100px) {
          main.mainpage {
            margin-left: 302px;
          }
        }

        @media screen and (max-width: 1024px) {
          section {
            flex-direction: column;
            min-height: 0px;
          }
          .portfolio-wrapper-bottomnavigation-container {
            display: initial;
          }
          .portfolio-wrapper-topnavigation-container {
            display: initial;
            position: fixed;
            top: 0px;
            z-index: 1000;
            width: 100%;
          }
          main.mainpage {
            margin-left: 0px;
            min-height: 0px;
          }
        }
      `}</style>
    </section>
  );
};

export default PageWrapper;

PageWrapper.propTypes = {
  goBack: PropTypes.func.isRequired,
  goToPage: PropTypes.func.isRequired,
  page: PropTypes.string,
  sidebarPhoto: PropTypes.string,
  children: PropTypes.node,
};
