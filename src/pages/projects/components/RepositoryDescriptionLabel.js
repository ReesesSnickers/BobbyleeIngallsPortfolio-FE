import React from 'react';
import DescriptionLabel from './DescriptionLabel';
import RepositoryContainer from './RepositoryContainer';

const RepositoryDescriptionLabel = ({ repositories = [] }) => {
  const hasMultiple = repositories.length > 1;
  const label = hasMultiple ? 'Repositories' : 'Repository';
  return (
    <DescriptionLabel
      label={label}
      information={<RepositoryContainer repositories={repositories} />}
    />
  );
};

export default RepositoryDescriptionLabel;
