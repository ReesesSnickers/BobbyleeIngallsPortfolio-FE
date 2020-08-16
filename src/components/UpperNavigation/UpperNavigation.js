import React from "react";
import PropTypes from "prop-types";

// config
import { createNavigationTabs } from "../../configs/sidebarConfig";

// components
import NavigationTabs from "../../components/NavigationTabs";
import StyledAvatar from "../../components/StyledAvatar";

const UpperNavigation = ({ goToPage, title, name, photo, page }) => {
  return (
    <nav className="uppernavigation">
      <section className="portfolio-UpperNavigation-header-container">
        <div className="avatar-wrapper">
          <StyledAvatar
            src={photo}
            alt="Bobbylee Ingalls"
            border={true}
            name={name}
            title={title}
            customClassName="uppernavigation-avatar"
          />
        </div>
      </section>
      <NavigationTabs
        page={page}
        goToPage={goToPage}
        array={createNavigationTabs()}
      />
      <style jsx>{`
        :global(section.uppernavigation-avatar-text) {
          width: auto !important;
        }
        :global(section.uppernavigation-avatar-wrapper)
          > :global(.MuiAvatar-root) {
          width: 95px;
          height: 95px;
        }
        .avatar-wrapper :global(h2) {
          font-size: 32px;
          color: #0e1a3c;
          font-family: Helvetica, Arial, sans-serif;
          margin: 0px;
        }
        .avatar-wrapper :global(h1) {
          font-size: 48px;
          color: #0e1a3c;
          font-family: Helvetica, Arial, sans-serif;
          margin: 0px;
        }
        .avatar-wrapper :global(.wrapper) {
          flex-direction: row;
        }
        :global(.MuiAvatar-root) {
          width: 100px;
          height: 100px;
          margin: 0px 30px 0px 30px;
        }
        nav.uppernavigation {
          padding-top: 20px;
          background-color: #fff;
        }
        @media screen and (max-width: 570px) {
          .avatar-wrapper :global(h2) {
            font-size: 27px;
          }
          .avatar-wrapper :global(h1) {
            font-size: 33px;
          }
          :global(section.uppernavigation-avatar-wrapper)
            > :global(.MuiAvatar-root) {
            width: 75px;
            height: 75px;
          }
        }
        @media screen and (max-width: 430px) {
          .avatar-wrapper :global(h2) {
            font-size: 20px;
          }
          .avatar-wrapper :global(h1) {
            font-size: 28px;
          }
          :global(.MuiAvatar-root) {
            width: 60px;
            height: 60px;
          }
        }
        @media screen and (max-width: 358px) {
          :global(section.uppernavigation-avatar-wrapper)
            > :global(.MuiAvatar-root) {
            width: 55px;
            height: 55px;
            margin-left 10px;
            margin-right: 10px;
          }
          .avatar-wrapper :global(h2) {
            font-size: 16px;
          }
          .avatar-wrapper :global(h1) {
            font-size: 24px;
          }
        }
      `}</style>
    </nav>
  );
};

export default UpperNavigation;

UpperNavigation.propTypes = {
  goToPage: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
