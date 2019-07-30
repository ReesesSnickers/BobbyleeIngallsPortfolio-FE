import React from "react";

const BlogsPagination = ({}) => {
  return (
    <section className="portfolio-BlogsPagination">
      <button>Prev</button>
      <span>Show:</span>
      <select>
        <option value="20">30</option>
        <option value="40">40</option>
        <option value="60">60</option>
      </select>
      <button>Next</button>
    </section>
  );
};

export default BlogsPagination;
