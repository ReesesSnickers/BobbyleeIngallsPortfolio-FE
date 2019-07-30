import React from "react";

const SidebarTabs = ({ goToPage, array }) => {
  return (
    <section className="portfolio-sidebartabs">
      {array.map((tab, key) => {
        return (
          <span
            key={key}
            className={`portfolio-sidebartabs-tab${
              key === 0 ? "-first" : key === array.length - 1 ? "-last" : ""
            }`}
            onClick={() => goToPage(`/${tab}`)}
            tabIndex="1"
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
