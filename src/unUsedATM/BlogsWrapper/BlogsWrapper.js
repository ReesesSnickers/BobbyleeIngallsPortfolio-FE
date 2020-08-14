import React from "react";
import PropTypes from "prop-types";

import BlogsPagination from "../../components/BlogPagination";

const BlogsWrapper = ({ children }) => {
  return (
    <section className="portfolio-blogswrapper">
      <div className="portfolio-blogswrapper-pagination">
        <BlogsPagination />
      </div>
      {children}
      <div className="portfolio-blogswrapper-pagination">
        <BlogsPagination />
      </div>
    </section>
  );
};

export default BlogsWrapper;

BlogsWrapper.propTypes = {
  // child to be passed into wrapper
  children: PropTypes.node
};
