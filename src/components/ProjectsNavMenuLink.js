import React from 'react';
import { ROUTES } from '../utility/constants/routes';
import NavMenuLink from './buttons/NavMenuLink';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

const ProjectsNavMenuLink = () => {
  return (
    <NavMenuLink
      to={ROUTES.PROJECTS}
      label="Projects"
      icon={faProjectDiagram}
    />
  );
};

export default ProjectsNavMenuLink;
