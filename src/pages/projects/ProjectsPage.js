import React from 'react';
import ProjectCard from './components/ProjectCard';
import { Outlet, useParams } from 'react-router';
import Projects from './utility/projects';

const ProjectsPage = () => {
  let params = useParams();
  const isProjectPage = params.title ? true : false;
  return (
    <>
      {!isProjectPage && (
        <section className="projects-container">
          {Projects.map((project) => {
            const cardImage =
              project.assets.length > 0 ? project.assets[0].path : '';
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={cardImage}
              />
            );
          })}
        </section>
      )}
      <Outlet />
      <style jsx>{`
        .projects-container {
          width: 100%;
          max-width: 1100px;
          display flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

export default ProjectsPage;
