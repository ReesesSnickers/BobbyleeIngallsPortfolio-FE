import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Colors from '../../utility/constants/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavMenuLink = ({ children, to, icon, label, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link className="nav-menu-link" to={to} {...props}>
      <div className="label-wrapper">
        <span className={`tab${match ? ' active' : ''}`} />
        <div className="icon-container">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3>{label}</h3>
      </div>
      <style jsx>{`
        .tab {
          width: 10px;
          height: 100%;
        }
        .active {
          background-color: ${Colors.BRIGHT_GREEN};
        }
        .label-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .icon-container {
          width: 50px;
          height: 50px;
          background-color: ${Colors.DARK_GREY};
          border-radius: 8px;
          margin-right: 20px;
          font-size: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 20px;
        }
        :global(.nav-menu-link) {
          text-decoration: none;
          color: ${Colors.WHITE};
          height: 100%;
          width: 100%;
        }
        :global(.nav-menu-link):hover :global(.icon-container > svg) {
          animation: shake 1s;
        }
        :global(.nav-menu-link):hover :global(.icon-container > svg > path) {
          fill: ${Colors.BRIGHT_GREEN};
        }
        :global(.nav-menu-link):hover h3 {
          color: ${Colors.BRIGHT_GREEN};
        }

        @keyframes shake {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </Link>
  );
};

export default NavMenuLink;
