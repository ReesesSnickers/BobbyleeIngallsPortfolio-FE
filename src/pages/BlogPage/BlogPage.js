import React from "react";

import UserPhoto from "../../assets/testavatar.jpg";

const BlogPage = ({ match, history }) => {
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
  const blog = blogConfig.find(element => element.id === match.params.blogId);
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
