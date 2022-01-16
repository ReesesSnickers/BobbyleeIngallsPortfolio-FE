import React from 'react';
import ExternalLink from '../../../components/buttons/ExternalLink';
import Colors from '../../../utility/constants/colors';

const RepositoryPill = ({ label, to, ...props }) => {
  return (
    <ExternalLink to={to} {...props}>
      <div>
        <p>{label}</p>
      </div>
      <style jsx>{`
        :global(.external-link) {
          color: ${Colors.WHITE};
          text-decoration: none;
          cursor: pointer;
          text-transform: capitalize;
          -webkit-transform: translate(0, 0);
          -ms-transform: translate(0, 0);
          transform: translate(0, 0);
          -webkit-transition: opacity 0.3s ease-in-out,
            -webkit-transform 1.3s ease-in-out;
          transition: opacity 0.3s ease-in-out,
            -webkit-transform 1.3s ease-in-out;
          -o-transition: transform 1.3s ease-in-out, opacity 0.3s ease-in-out;
          transition: transform 1.3s ease-in-out, opacity 0.3s ease-in-out;
          transition: transform 1.3s ease-in-out, opacity 0.3s ease-in-out,
            -webkit-transform 1.3s ease-in-out;
        }
        div {
          padding: 2px 10px;
          background-color: ${Colors.LIGHT_GREY};
          border-radius: 25px;
          text-transform: capitalize;
        }
        p {
          opacity: 0.4;
          margin: 0px;
          font-size: 14px;
        }

        div:hover {
          color: ${Colors.BRIGHT_GREEN};
          -webkit-transform: scale(1.1, 1.1);
          -ms-transform: scale(1.1, 1.1);
          transform: scale(1.1, 1.1);
        }
        div:hover p {
          opacity: 1;
        }
      `}</style>
    </ExternalLink>
  );
};

export default RepositoryPill;
