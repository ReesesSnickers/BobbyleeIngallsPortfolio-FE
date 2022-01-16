import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import Colors from '../../utility/constants/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSS from '../../utility/constants/CSS';

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
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
        .icon-container {
          width: 50px;
          height: 50px;
          background-color: ${Colors.DARK_GREY};
          border-radius: ${CSS.CARD_BORDER_RADIUS};
          margin-right: 20px;
          font-size: 30px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
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
          -webkit-animation: shake 1s;
          animation: shake 1s;
        }
        :global(.nav-menu-link):hover :global(.icon-container > svg > path) {
          fill: ${Colors.BRIGHT_GREEN};
        }
        :global(.nav-menu-link):hover h3 {
          color: ${Colors.BRIGHT_GREEN};
        }

        @-webkit-keyframes shake {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          25% {
            -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg);
          }
          50% {
            -webkit-transform: rotate(1deg);
            transform: rotate(1deg);
          }
          75% {
            -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg);
          }
          100% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
        }

        @keyframes shake {
          0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          25% {
            -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg);
          }
          50% {
            -webkit-transform: rotate(1deg);
            transform: rotate(1deg);
          }
          75% {
            -webkit-transform: rotate(-5deg);
            transform: rotate(-5deg);
          }
          100% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
          }
        }
      `}</style>
    </Link>
  );
};

export default NavMenuLink;
