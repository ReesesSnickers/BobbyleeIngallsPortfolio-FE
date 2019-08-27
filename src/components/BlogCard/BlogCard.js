import React from "react";
import PropTypes from "prop-types";

import tempPhoto from "../../static/ProfilePhoto.jpg";

const BlogCard = ({ blog, onClick }) => {
  return (
    <button className="portfolio-blogcard-wrapper" onClick={onClick}>
      <div className="portfolio-blogcard-image-wrapper">
        <img
          className="portfolio-blogcard-image"
          // src={blog.photo}
          src={tempPhoto}
          alt={blog.title}
        />
      </div>
      <div className="portfolio-blogcard-details-wrapper">
        <h1 className="portfolio-blogcard-title">{blog.title}</h1>
        <h2 className="portfolio-blogcard-description">{blog.description}</h2>
        <h3 className="portfolio-blogcard-created">{blog.created}</h3>
      </div>
    </button>
  );
};

export default BlogCard;

BlogCard.propTypes = {
  // blog object
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    create: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
  }),
  // function to occure when card is clicked
  onClick: PropTypes.func.isRequired
};
