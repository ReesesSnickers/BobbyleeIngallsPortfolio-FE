import React, { useState, useEffect } from 'react';
import {
  faCodepen,
  faFacebookSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import CSS from '../utility/constants/CSS';
import NavMenuIconButton from './buttons/NavMenuIconButton';
import Colors from '../utility/constants/colors';
import URLs from '../utility/constants/urls';
import Feature from '../utility/featureConfig';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMugHot } from '@fortawesome/free-solid-svg-icons';

const NavMenu = ({ isOpen = false }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [showCodePen, setShowCodePen] = useState(false);
  const [showLinkedIn, setShowLinkedIn] = useState(false);
  const [showFacebook, setShowFacebook] = useState(false);

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    // UE handles when the social media buttons should show in the menu
    if (dimensions.width < 644) {
      setShowCodePen(true);
    } else {
      setShowCodePen(false);
    }

    if (dimensions.width < 563) {
      setShowLinkedIn(true);
    } else {
      setShowLinkedIn(false);
    }

    if (dimensions.width < 484) {
      setShowFacebook(true);
    } else {
      setShowFacebook(false);
    }
  }, [dimensions]);

  useEffect(() => {
    // UE for handling windows events
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="menu">
      <section>
        <ul>
          {showFacebook && Feature.showFacebookMediaButton ? (
            <li>
              <NavMenuIconButton
                href={URLs.FACEBOOK}
                ariaLabel="Facebook Profile"
                icon={faFacebookSquare}
              />
            </li>
          ) : null}
          {showLinkedIn && Feature.showLinkedInMediaButton ? (
            <li>
              <NavMenuIconButton
                href={URLs.LINKEDIN}
                ariaLabel="LinkedIn Profile"
                icon={faLinkedin}
              />
            </li>
          ) : null}
          {showCodePen && Feature.showCodepenMediaButton ? (
            <li>
              <NavMenuIconButton
                href={URLs.CODEPEN}
                ariaLabel="Codepen Profile"
                icon={faCodepen}
              />
            </li>
          ) : null}
        </ul>
        {/* DEV NOTE: Apply a donation tied to a payment gateway service */}
        {/* <p>Donate a coffee</p>
        <NavMenuIconButton
          href="#"
          ariaLabel="Donate a coffee to Bobbylee Ingalls"
          icon={faMugHot}
          className="coffee"
        /> */}
      </section>
      <style jsx>{`
        .menu {
          position: absolute;
          top: 55px;
          background-color: ${Colors.LIGHT_PURPLE};
          width: ${isOpen ? '300px' : '0px'};
          display: ${isOpen ? 'block' : 'none'};
          visibility: ${isOpen ? 'auto' : 'hidden'};
        }

        section {
          padding: 25px;
        }

        li {
          list-style-type: none;
        }

        ul {
          padding: 0px;
          margin: 0px;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        @media screen and (max-width: ${CSS.MAX_WIDTH_MOBILE}px) {
          .menu {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default NavMenu;
