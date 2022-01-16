import React, { useEffect, useState, useReducer } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CSS from '../utility/constants/CSS';
import Colors from '../utility/constants/colors';
import NavIconButton from './buttons/NavIconButton';
import NavMenu from './NavMenu';
import Feature from '../utility/featureConfig';
import FacebookNavIconButton from './FacebookNavIconButton';
import LinkedInNavIconButton from './LinkedInNavIconButton';
import CodePenNavIconButton from './CodePenNavIconButton';

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [isMenuOpen, toggleMenu] = useReducer(
    (isMenuOpen) => (isMenuOpen = !isMenuOpen),
    false
  );
  const [isMenuHidden, setIsMenuHidden] = useReducer((hidden) => !hidden, true);
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
    // UE handles when the social media buttons should be removed from the nav bar
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

  useEffect(() => {
    // UE handles setting the hidden attribute to prevent seeing the menu as a sliver in mobile port views
    const menuIsOpenAndHidden = isMenuOpen && isMenuHidden;
    const menuIsClosedAndVisable = !isMenuOpen && !isMenuHidden;

    if (menuIsOpenAndHidden) {
      setIsMenuHidden();
    }
    if (menuIsClosedAndVisable) {
      setIsMenuHidden();
    }
  }, [isMenuOpen, isMenuHidden]);

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
        <NavMenu
          isOpen={isMenuOpen}
          closeMenu={toggleMenu}
          hidden={isMenuHidden}
        />

        {showFacebook && Feature.showFacebookMediaButton ? (
          <FacebookNavIconButton />
        ) : null}
        {showLinkedIn && Feature.showLinkedInMediaButton ? (
          <LinkedInNavIconButton />
        ) : null}
        {showCodePen && Feature.showCodepenMediaButton ? (
          <CodePenNavIconButton />
        ) : null}
        <h1>Bobbylee Ingalls Portfolio</h1>
      </nav>

      <style jsx>{`
        .nav {
          display: -moz-flex;
          display: -ms-flex;
          display: -o-flex;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          position: fixed;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          top: 0;
          width: 100%;
          background-color: ${Colors.BLACK};
          -webkit-transition-timing-function: ease-in;
          -o-transition-timing-function: ease-in;
          transition-timing-function: ease-in;
          -webkit-transition: 0.5s;
          -o-transition: 0.5s;
          transition: 0.5s;
          opacity: 0;
          z-index: 100;
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

        .menu-button {
          margin-left: 30px;
        }

        @media screen and (max-width: ${CSS.MAX_WIDTH_MOBILE}px) {
          h1 {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
