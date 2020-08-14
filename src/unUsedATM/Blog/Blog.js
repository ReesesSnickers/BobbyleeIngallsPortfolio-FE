import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import BlogsWrapper from "../../layouts/BlogsWrapper";
import BlogCard from "../../components/BlogCard";
import BlogCardRecent from "../../components/BlogCardRecent";
import Loading from "../../components/Loading";

import { ROUTES } from "../../utility/constants/routes";

const Blog = ({ blogs }) => {
  if (blogs.length === 0) {
    return <Loading load="blogs" />;
  } else {
    return (
      <section className="portfolio-blog-wrapper">
        <section className="portfolio-blog-mostrecent-wrapper">
          <h1 className="portfolio-blog-mostrecent-caption">Most Recent:</h1>
          <Link
            to={{
              pathname: `${ROUTES.BLOG}/${blogs[0]._id}`,
              state: {
                blog: blogs[0],
                blogs: blogs,
              },
            }}
          >
            <BlogCardRecent blog={blogs[0]} />
          </Link>
        </section>
        <BlogsWrapper>
          {blogs.map((blog, key) => {
            return (
              <Link
                key={key}
                to={{
                  pathname: `${ROUTES.BLOG}/${blog._id}`,
                  state: { blog: blog, blogs: blogs },
                }}
              >
                <div
                  className={
                    key === 0
                      ? "portfolio-blog-card-first"
                      : key === blogs.length - 1
                      ? "portfolio-blog-card-last"
                      : "portfolio-blog-card"
                  }
                >
                  <BlogCard blog={blog} />
                </div>
              </Link>
            );
          })}
        </BlogsWrapper>
      </section>
    );
  }
};

export default Blog;

Blog.propTypes = {
  // array of blog objects
  blogs: PropTypes.array,
};
