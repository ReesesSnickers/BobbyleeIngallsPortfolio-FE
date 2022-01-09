import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utility/constants/routes';
import DetailsContainer from './components/DetailsContainer';
import Projects from './utility/projects';
import AssetContainer from './components/AssetContainer';

const ProjectPage = () => {
  let params = useParams();
  let navigate = useNavigate();

  // based on the title param, locate the project from the projects data
  let project = Projects.find(
    (project) => project.title.replace(' ', '').toLowerCase() === params.title
  );

  // UE handles redirecting back to the projects page in the case the requested project page does not exist
  useEffect(() => {
    if (project === undefined) navigate(ROUTES.UNKNOWN);
  }, [project, navigate]);

  return (
    <section>
      <AssetContainer project={project} />
      <h1>{project.title}</h1>
      <DetailsContainer project={project} />
      <style jsx>{`
        h1 {
          text-align: center;
        }
      `}</style>
    </section>
  );
};

export default ProjectPage;
