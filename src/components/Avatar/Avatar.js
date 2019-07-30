import React from "react";

const Avatar = ({ src, alt, border, name, title }) => {
  return (
    <section className="portfolio-avatar-wrapper">
      <section
        className={`portfolio-avatar ${
          border ? "portfolio-avatar-border" : ""
        }`}
      >
        <img className="portfolio-avatar-image" src={src} alt={alt} />
      </section>
      <section className="portfolio-avatar-user">
        <h1 className="portfolio-avatar-name">{name}</h1>
        <h2 className="portfolio-avatar-title">{title}</h2>
      </section>
    </section>
  );
};

export default Avatar;
