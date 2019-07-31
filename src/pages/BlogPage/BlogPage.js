import React from "react";

const BlogPage = ({ match, location }) => {
  const {
    params: { blogId }
  } = match;
  const blog = location.state.blog;

  return <section className="portfolio-blogpage-wrapper">{blogId}</section>;
};

export default BlogPage;
