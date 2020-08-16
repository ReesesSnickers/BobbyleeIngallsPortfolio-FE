import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard";
import { ROUTES } from "../../utility/constants/routes";

const ProjectCardList = ({ array }) => {
  return (
    <section className="wrapper">
      {array.map((project, key) => {
        return (
          <Link
            key={key}
            to={{
              // pathname: `${ROUTES.PROJECTS}/${project._id}`,
              pathname: `${ROUTES.PROJECTS}`,
              state: { projects: array },
            }}
          >
            <ProjectCard title={project.title} logo={project.fullScreenPhoto} />
          </Link>
        );
      })}
      <style jsx>{`
        .wrapper {
          width: 100%;
          height: 100%;
          margin-top: 100px;
        }

        @media screen and (max-width: 930px) {
          .wrapper {
            padding-top: 100px;
          }
        }

        @media screen and (max-width: 570px) {
          .wrapper {
            padding-top: 80px;
          }
        }

        @media screen and (max-width: 430px) {
          .wrapper {
            padding-top: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectCardList;

ProjectCardList.propTypes = {
  array: PropTypes.shape([
    {
      title: PropTypes.string.isRequired,
      fullScreenPhoto: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
    },
  ]),
};
