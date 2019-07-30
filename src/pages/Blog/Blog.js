import React from "react";

import BlogsWrapper from "../../layouts/BlogsWrapper";

const Blog = ({ goBack }) => {
  return (
    <section className="portfolio-blog-wrapper">
      <section>
        <h1>Most Recent</h1>
      </section>
      <BlogsWrapper>
        <span>test</span>
      </BlogsWrapper>
    </section>
  );
};

export default Blog;
