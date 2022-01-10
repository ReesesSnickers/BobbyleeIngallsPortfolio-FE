import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utility/constants/routes';
import Regex from '../../utility/constants/regex';
import DetailsContainer from './components/DetailsContainer';
import Projects from './utility/projects';
import AssetContainer from './components/AssetContainer';
import NavIconButton from '../../components/buttons/NavIconButton';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ProjectPage = () => {
  let params = useParams();
  let navigate = useNavigate();

  // based on the title param, locate the project from the projects data
  let project = Projects.find(
    (project) =>
      project.title.replace(Regex.ALL_SPACES, '').toLowerCase() === params.title
  );

  // UE handles redirecting back to the projects page in the case the requested project page does not exist
  useEffect(() => {
    if (project === undefined) navigate(ROUTES.UNKNOWN);
  }, [project, navigate]);

  return (
    <section>
      <NavIconButton
        onClick={() => navigate(-1)}
        ariaLabel="Go back"
        className="back-button"
        icon={faArrowLeft}
        useButton={true}
      />
      <AssetContainer project={project} />
      <h1>{project.title}</h1>
      <DetailsContainer project={project} />
      <style jsx>{`
        h1 {
          text-align: center;
        }
        section {
          width: 100%;
          position: relative;
        }
        section :global(.back-button) {
          position: absolute;
          right: 0;
          z-index: 50;
        }
      `}</style>
    </section>
  );
};

export default ProjectPage;
