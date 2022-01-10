import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavMenuIconButton = ({ href, icon, ariaLabel, className }) => {
  return (
    <>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={ariaLabel}
      >
        <FontAwesomeIcon icon={icon} />
      </a>

      <style jsx>{`
        a {
          font-size: 48px;
          margin: 20px;
          position: relative;
        }

        section {
          position: absolute;
          color: #fff;
          width: 200px;
          height: 200px;
          background-color: grey;
        }
      `}</style>
    </>
  );
};

export default NavMenuIconButton;
