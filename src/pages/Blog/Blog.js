import React from "react";

import { Link } from "react-router-dom";

import BlogsWrapper from "../../layouts/BlogsWrapper";
import BlogCard from "../../components/BlogCard";
import BlogCardRecent from "../../components/BlogCardRecent";

import UserPhoto from "../../assets/testavatar.jpg";

const Blog = ({ goBack }) => {
  const blogConfig = [
    {
      id: "test1",
      photo: UserPhoto,
      title: "test title1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      created: "created1"
    },
    {
      id: "test2",
      photo: UserPhoto,
      title: "test title2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      created: "created1"
    },
    {
      id: "test3",
      photo: UserPhoto,
      title: "test title3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      created: "created1"
    },
    {
      id: "test4",
      photo: UserPhoto,
      title: "test title4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      created: "created1"
    }
  ];
  return (
    <section className="portfolio-blog-wrapper">
      <section className="portfolio-blog-mostrecent-wrapper">
        <h1 className="portfolio-blog-mostrecent-caption">Most Recent:</h1>
        <Link
          to={{
            pathname: `/Blog/${blogConfig[0].id}`,
            state: {
              blog: blogConfig[0]
            }
          }}
        >
          <BlogCardRecent blog={blogConfig[0]} />
        </Link>
      </section>
      <BlogsWrapper>
        {blogConfig.map((blog, key) => {
          return (
            <Link
              key={key}
              to={{ pathname: `/Blog/${blog.id}`, state: { blog: blog } }}
            >
              <div
                className={
                  key === 0
                    ? "portfolio-blog-card-first"
                    : key === blogConfig.length - 1
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
};

export default Blog;
