import React from "react";
import PropTypes from "prop-types";

const NavigationTabs = ({ goToPage, array, page }) => {
  return (
    <nav className="navigationtabs">
      {array.map((tab, key) => {
        return (
          <section key={key} style={{ width: "auto" }}>
            <span
              key={key}
              className={`tab${
                key === 0 ? "-first" : key === array.length - 1 ? "-last" : ""
              } ${page === `/${tab}` ? "tab-active" : ""}`}
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
            <div className="bar" />
          </section>
        );
      })}
      <div />
      <style jsx>{`
        nav.navigationtabs {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: center;
        }
        .tab {
          font-size: 30px;
          color: #0e1a3c;
          font-family: Helvetica, Arial, sans-serif;
        }
        .tab-first {
          font-size: 30px;
          color: #0e1a3c;
          font-family: Helvetica, Arial, sans-serif;
        }
        .tab-last {
          font-size: 30px;
          color: #0e1a3c;
          font-family: Helvetica, Arial, sans-serif;
        }
        .bar {
          background-color: transparent;
          height: 4px;
          width: 100%;
        }
        .tab:hover {
          cursor: pointer;
        }
        .tab-last:hover {
          cursor: pointer;
        }
        .tab-first:hover {
          cursor: pointer;
        }
        .tab:focus {
        }
        .tab-last:focus {
        }
        .tab-first:focus {
        }
        .tab:hover + .bar {
          background-color: #eb21d4;
        }
        .tab-first:hover + .bar {
          background-color: #eb21d4;
        }
        .tab-last:hover + .bar {
          background-color: #eb21d4;
        }

        .tab:focus + .bar {
          background-color: #eb21d4;
          width: 100%;
        }
        .tab-first:focus + .bar {
          background-color: #eb21d4;
        }
        .tab-last:focus + .bar {
          background-color: #eb21d4;
        }

        .tab-active {
          color: #eb21d4;
          font-weight: bold;
        }

        @media screen and (max-width: 400px) {
          .tab {
            font-size: 20px;
          }
          .tab-first {
            font-size: 20px;
          }
          .tab-last {
            font-size: 20px;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavigationTabs;

NavigationTabs.propTypes = {
  page: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired,
  goToPage: PropTypes.func.isRequired,
};
