import React from "react";
import PropTypes from "prop-types";

const SidebarTabs = ({ goToPage, array }) => {
  return (
    <section role="navigation" className="portfolio-sidebartabs">
      {array.map((tab, key) => {
        return (
          <span
            role="link"
            aria-label={`Navigate to the ${tab} page`}
            key={key}
            className={`portfolio-sidebartabs-tab${
              key === 0 ? "-first" : key === array.length - 1 ? "-last" : ""
            }`}
            onClick={() => goToPage(`/${tab}`)}
            tabIndex="0"
            onKeyPress={event => {
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
    </section>
  );
};

export default SidebarTabs;

SidebarTabs.propTypes = {
  // function to go directly to a page
  goToPage: PropTypes.func.isRequired,
  // tabs array
  array: PropTypes.array.isRequired
};
