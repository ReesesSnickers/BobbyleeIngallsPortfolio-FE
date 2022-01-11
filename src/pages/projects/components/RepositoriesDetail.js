import React from 'react';
import DetailContainer from './DetailContainer';
import RepositoryPill from './RepositoryPill';

const RepositoriesDetail = ({ repositories }) => {
  return (
    <DetailContainer title="Repositories" showOpenToggle={false}>
      <RepositoryPill />
    </DetailContainer>
  );
};

export default RepositoriesDetail;
