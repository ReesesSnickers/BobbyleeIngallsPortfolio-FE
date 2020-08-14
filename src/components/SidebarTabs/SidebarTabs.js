import React from "react";
import PropTypes from "prop-types";

const SidebarTabs = ({ goToPage, array }) => {
  return (
    <nav className="sidebar">
      {array.map((tab, key) => {
        return (
          <span
            role="link"
            aria-label={`Navigate to the ${tab} page`}
            key={key}
            className={`tab${
              key === 0 ? "-first" : key === array.length - 1 ? "-last" : ""
            }`}
            onClick={() => goToPage(`/${tab}`)}
            tabIndex="0"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                goToPage(`/${tab}`);
              }
            }}
          >
            {tab}
          </span>
        );
      })}
      <div />
      <style jsx>{`
        nav.sidebar {
          display: flex;
          flex-direction: column;
          text-align: center;
        }
        .tab {
          margin: 25px 0px 25px 0px;
          font-size: 30px;
          color: #ffffff;
          font-family: Helvetica, Arial, sans-serif;
        }
        .tab-first {
          margin: 50px 0px 40px 0px;
          font-size: 30px;
          color: #ffffff;
          font-family: Helvetica, Arial, sans-serif;
        }
        .tab-last {
          margin: 40px 0px 55px 0px;
          font-size: 30px;
          color: #ffffff;
          font-family: Helvetica, Arial, sans-serif;
        }
        .tab:hover {
          color: #eb21d4;
          font-weight: bold;
          cursor: pointer;
        }
        .tab-first:hover {
          color: #eb21d4;
          font-weight: bold;
          cursor: pointer;
        }
        .tab-last:hover {
          color: #eb21d4;
          font-weight: bold;
          cursor: pointer;
        }
        nav.sidebar > button {
          background-color: transparent;
          width: 160px;
        }
        .tab:focus {
          color: #eb21d4;
          font-weight: bold;
        }
        .tab-first:focus {
          color: #eb21d4;
          font-weight: bold;
        }
        .tab-last:focus {
          color: #eb21d4;
          font-weight: bold;
        }
      `}</style>
    </nav>
  );
};

export default SidebarTabs;

SidebarTabs.propTypes = {
  goToPage: PropTypes.func.isRequired,
  array: PropTypes.array.isRequired,
};
