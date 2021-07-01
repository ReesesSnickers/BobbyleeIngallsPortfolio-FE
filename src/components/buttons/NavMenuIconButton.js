import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavMenuIconButton = ({ href, icon, ariaLabel, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      <FontAwesomeIcon icon={icon} />
      <style jsx>{`
        a {
          font-size: 48px;
          margin: 20px;
        }
      `}</style>
    </a>
  );
};

export default NavMenuIconButton;
