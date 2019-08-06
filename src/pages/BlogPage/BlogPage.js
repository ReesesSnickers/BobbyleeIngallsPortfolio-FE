import React from "react";

const BlogPage = ({ match, history }) => {
  const blog = history.location.state.blogs.find(
    element => element._id === match.params.blogId
  );
  return (
    <section className="portfolio-blogpage-wrapper">
      <div className="portfolio-blogpage-header-wrapper">
        <h1 className="portfolio-blogpage-created">{blog.created}</h1>
        <button
          className="portfolio-blogpage-exit"
          onClick={() => history.goBack()}
        >
          X
        </button>
      </div>
      <div className="portfolio-blogpage-image-wrapper">
        <img
          className="portfolio-blogpage-image"
          src={blog.photo}
          alt={blog.title}
        />
      </div>
      <h1 className="portfolio-blogpage-title">{blog.title}</h1>
      <span className="portfolio-blogpage-description">{blog.description}</span>
    </section>
  );
};

export default BlogPage;
