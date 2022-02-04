import React from 'react';
import DetailsHeader from './DetailsHeader';
import DescriptionDetail from './DescriptionDetail';
import TechnologiesDetail from './TechnologiesDetail';
import RepositoriesDetail from './RepositoriesDetail';
import Feature from '../../../utility/featureConfig';

const DetailsContainer = ({
  project = { description: '', technologies: [], repos: [] },
}) => {
  const { description, repos, technologies } = project;
  return (
    <>
      <DetailsHeader project={project} />
      <DescriptionDetail description={description} />
      {Feature.showProjectsTechnologies ? (
        <TechnologiesDetail technologies={technologies} />
      ) : null}
      {Feature.showProjectsRepositories ? (
        <RepositoriesDetail repositories={repos} />
      ) : null}
    </>
  );
};

export default DetailsContainer;
