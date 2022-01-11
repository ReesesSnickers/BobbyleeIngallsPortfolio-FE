import React from 'react';
import DetailsHeader from './DetailsHeader';
import DescriptionDetail from './DescriptionDetail';
import TechnologiesDetail from './TechnologiesDetail';
import RepositoriesDetail from './RepositoriesDetail';

const DetailsContainer = ({ project }) => {
  const { description, repos, technologies } = project;
  return (
    <>
      <DetailsHeader project={project} />
      <DescriptionDetail description={description} />
      <TechnologiesDetail technologies={technologies} />
      <RepositoriesDetail repositories={repos} />
    </>
  );
};

export default DetailsContainer;
