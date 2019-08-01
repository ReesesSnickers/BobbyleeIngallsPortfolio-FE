import React from "react";

const BlogsPagination = () => {
  return (
    <section className="portfolio-BlogsPagination">
      <button className="portfolio-BlogsPagination-navigation-prev">
        Prev
      </button>
      <span className="portfolio-BlogsPagination-show">Show:</span>
      <select>
        <option value="20">30</option>
        <option value="40">40</option>
        <option value="60">60</option>
      </select>
      <button className="portfolio-BlogsPagination-navigation-next">
        Next
      </button>
    </section>
  );
};

export default BlogsPagination;
