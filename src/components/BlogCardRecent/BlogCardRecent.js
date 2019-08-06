import React from "react";
import tempPhoto from "../../static/ProfilePhoto.jpg";

const BlogCard = ({ blog, onClick }) => {
  return (
    <button className="portfolio-blogcardrecent-wrapper" onClick={onClick}>
      <div className="portfolio-blogcardrecent-image-wrapper">
        <img
          className="portfolio-blogcardrecent-image"
          // src={blog.photo}
          src={tempPhoto}
          alt={blog.title}
        />
      </div>
      <div className="portfolio-blogcardrecent-details-wrapper">
        <h1 className="portfolio-blogcardrecent-title">{blog.title}</h1>
        <h2 className="portfolio-blogcardrecent-description">
          {blog.description}
        </h2>
        <h3 className="portfolio-blogcardrecent-created">{blog.created}</h3>
      </div>
    </button>
  );
};

export default BlogCard;
