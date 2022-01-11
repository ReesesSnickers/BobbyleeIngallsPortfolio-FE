import React from 'react';
import RepositoryExternalLink from './RepositoryExternalLink';

const RepositoryContainer = ({ repositories }) => {
  return (
    <section>
      {repositories.length === 0 && (
        <p>Access to this repository must be granted through owning company</p>
      )}
      {repositories.map((repo) => {
        return (
          <RepositoryExternalLink
            key={repo.label}
            to={repo.url}
            label={repo.label}
          />
        );
      })}
      <style jsx>{`
        section {
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: wrap;
        }
        section :global(a) {
          margin-left: 5px;
          margin-right: 5px;
        }
        section :global(p) {
          margin: 0px;
        }
        section :global(a):first-of-type {
          margin-left: 0px;
        }
        section :global(a):last-of-type {
          margin-right: 0px;
        }
      `}</style>
    </section>
  );
};

export default RepositoryContainer;
