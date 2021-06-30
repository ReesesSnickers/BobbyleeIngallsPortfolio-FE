import React, { useEffect, useState, useReducer } from 'react';
import {
  faFacebookF,
  faLinkedinIn,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import URLs from '../utility/constants/urls';
import CSS from '../utility/constants/CSS';
import NavIconButton from './buttons/NavIconButton';

// Dev note:
// Need to apply a dropdown box
// Need to move icons right to left into  hamberger at different sizes

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [isMenuOpen, toggleMenu] = useReducer(
    (isMenuOpen) => (isMenuOpen = !isMenuOpen),
    false
  );
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [showCodePen, setShowCodePen] = useState(true);
  const [showLinkedIn, setShowLinkedIn] = useState(true);
  const [showFacebook, setShowFacebook] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > 75) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    if (dimensions.width < 644) {
      setShowCodePen(false);
    } else {
      setShowCodePen(true);
    }

    if (dimensions.width < 563) {
      setShowLinkedIn(false);
    } else {
      setShowLinkedIn(true);
    }

    if (dimensions.width < 484) {
      setShowFacebook(false);
    } else {
      setShowFacebook(true);
    }
  }, [dimensions]);

  useEffect(() => {
    // UE for handling windows events
    window.addEventListener('scroll', controlNavbar);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className={`nav ${showNav ? 'show-nav' : ''}`}>
        <NavIconButton
          onClick={toggleMenu}
          ariaLabel="Menu"
          className="menu-button"
          icon={faBars}
          useButton={true}
        />
        <div className="menu">
          <ul>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Codepen</li>
            <li>Assist a developer</li>
          </ul>
        </div>
        {showFacebook ? (
          <NavIconButton
            href={URLs.FACEBOOK}
            ariaLabel="Facebook Profile"
            icon={faFacebookF}
          />
        ) : null}
        {showLinkedIn ? (
          <NavIconButton
            href={URLs.LINKEDIN}
            ariaLabel="LinkedIn Profile"
            icon={faLinkedinIn}
          />
        ) : null}
        {showCodePen ? (
          <NavIconButton
            href={URLs.CODEPEN}
            ariaLabel="Codepen Profile"
            icon={faCodepen}
          />
        ) : null}
        <h1>Bobbylee Ingalls Portfolio</h1>
      </nav>
      <style jsx>{`
        .nav {
          display: -webkit-flex;
          display: -moz-flex;
          display: -ms-flex;
          display: -o-flex;
          display: flex;
          position: fixed;
          align-items: center;
          top: 0;
          width: 100%;
          background-color: #000000;
          transition-timing-function: ease-in;
          transition: 0.5s;
          opacity: 0;
        }

        .nav:hover,
        .nav:focus-within,
        .show-nav {
          opacity: 1;
        }

        h1 {
          opacity: 0.9;
          margin-right: 30px;
          font-size: 24px;
        }

        .menu {
          position: absolute;
          top: 55px;
          background-color: #b5a0bb;
          width: ${isMenuOpen ? '300px' : '0px'};
          height: ${isMenuOpen ? '500px' : '0px'};
          display: ${isMenuOpen ? 'block' : 'none'};
          visibility: ${isMenuOpen ? 'auto' : 'hidden'};
        }

        .menu-button {
          position: relative;
          margin-left: 30px;
        }

        @media screen and (max-width: ${CSS.MAX_WIDTH_MOBILE}px) {
          h1 {
            font-size: 20px;
          }

          .menu {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
