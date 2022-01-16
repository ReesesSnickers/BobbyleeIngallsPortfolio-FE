import React from 'react';
import { Messages } from '../../../utility/constants/messages';
import DetailContainer from './DetailContainer';
import RepositoryPill from './RepositoryPill';

const RepositoriesDetail = ({ repositories = [] }) => {
  const noRepositories = repositories?.length === 0;
  return (
    <DetailContainer title="Repositories" showOpenToggle={false}>
      <div>
        {noRepositories ? <p>{Messages.UNAVALIABLE_REPOSITORY}</p> : null}
        {repositories.map((repo) => {
          return (
            <RepositoryPill key={repo.label} label={repo.label} to={repo.url} />
          );
        })}
      </div>
      <style jsx>{`
        div {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
        }
        :global(.external-link) {
          margin-left: 10px;
          margin-right: 10px;
        }
        :global(.external-link):first-of-type {
          margin-left: 0px;
        }
        :global(.external-link):last-of-type {
          margin-right: 0px;
        }
      `}</style>
    </DetailContainer>
  );
};

export default RepositoriesDetail;
