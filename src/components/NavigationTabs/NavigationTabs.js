import React from "react";

const NavigationTabs = ({ goToPage, array }) => {
  return (
    <section className="portfolio-navigationtabs">
      {array.map((tab, key) => {
        return (
          <section style={{ width: "auto" }}>
            <span
              key={key}
              className={`portfolio-navigationtabs-tab${
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
            <div className="portfolio-navigationtabs-tab-bar" />
          </section>
        );
      })}
      <div />
    </section>
  );
};

export default NavigationTabs;