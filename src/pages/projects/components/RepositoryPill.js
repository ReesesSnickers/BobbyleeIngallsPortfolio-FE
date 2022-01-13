import React from 'react';
import ExternalLink from '../../../components/buttons/ExternalLink';
import Colors from '../../../utility/constants/colors';

const RepositoryPill = ({ label, to, ...props }) => {
  return (
    <ExternalLink to={to} {...props}>
      <div>{label}</div>
      <style jsx>{`
        :global(.external-link) {
          color: ${Colors.WHITE};
          text-decoration: none;
          cursor: pointer;
          text-transform: capitalize;
        }
        div {
          opacity: 0.9;
          background: ${Colors.BLACK};
          padding: 10px;
          border-radius: 25px;
          text-transform: capitalize;
          width: min-content;
          box-shadow: -1px -1px 3px rgba(0, 0, 0, 0.1),
            -2px -2px 6px rgba(76, 76, 76, 0.8);
        }

        div:hover {
          text-shadow: 0 0 5px ${Colors.YELLOW};
        }

        div:focus,
        div:active,
        div:hover {
            color: ${Colors.BRIGHT_GREEN};
          box-shadow: -1px -1px 3px rgba(0, 0, 0, 0.1),
            -2px -2px 6px rgba(76, 76, 76, 0.8),
            inset -2px -2px 10px rgba(0, 0, 0, 0.05),
            inset -2px -2px 10px rgba(76, 76, 76, 0.5);
        }

        }
      `}</style>
    </ExternalLink>
  );
};

export default RepositoryPill;
