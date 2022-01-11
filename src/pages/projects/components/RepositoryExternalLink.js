import React from 'react';
import ExternalLink from '../../../components/buttons/ExternalLink';
import Colors from '../../../utility/constants/colors';

const RepositoryExternalLink = ({ to, label }) => {
  return (
    <>
      <ExternalLink to={to} label={<p>{label}</p>} />
      <style jsx>{`
        :global(a) {
          text-decoration: none;
          color: ${Colors.BRIGHT_GREEN};
        }
      `}</style>
    </>
  );
};

export default RepositoryExternalLink;
