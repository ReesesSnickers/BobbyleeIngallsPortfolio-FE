import React from "react";

import BlogsPagination from "../../components/BlogPagination";

const BlogsWrapper = ({ children }) => {
  return (
    <section className="portfolio-blogswrapper">
      <BlogsPagination />
      {children}
      <BlogsPagination />
    </section>
  );
};

export default BlogsWrapper;
