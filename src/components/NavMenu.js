import React, { useEffect, useState } from 'react';
import CSS from '../utility/constants/CSS';
import DirectoriesContainer from './DirectoriesContainer';
import NavMenuEndContainer from './NavMenuEndContainer';
import SocialMediaContainer from './SocialMediaContainer';

const NavMenu = ({ isOpen = false, closeMenu }) => {
  const [hidden, setHidden] = useState(true);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const handleResize = () => {
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };
  useEffect(() => {
    // UE for handling windows events
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // UE sets the visability to hidden to hide changes when the screen is resized to mobile sizes and prevents issues if the button is clicked quickly
  useEffect(() => {
    let timer = null;
    if (!isOpen && !hidden) {
      timer = setTimeout(() => {
        setHidden(true);
      }, 1100);
    } else setHidden(false);
    return () => {
      if (isOpen && timer) clearTimeout(timer);
    };
  }, [isOpen, hidden]);

  return (
    <div
      className={`menu ${isOpen ? 'open-menu' : 'closed-menu'}${
        hidden ? ' hidden' : ''
      }`}
    >
      <DirectoriesContainer closeMenu={closeMenu} />
      <SocialMediaContainer closeMenu={closeMenu} />
      <div className="line" />
      <NavMenuEndContainer closeMenu={closeMenu} />
      <style jsx>{`
      .line {
        width:100%
        height:1px;
        border-bottom: 2px solid rgba(255,255,255,0.18);
      }
        .menu {
          position: fixed;
          width: 300px;
          top: 68px;
          border-bottom-right-radius: 8px;
          background: rgba(38, 37, 37, 0.1);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          transition: all 0.6s linear;
        }

        .closed-menu {
          left: -350px;
          pointer-events: none;
        }

        .open-menu {
          left: 0;
        }
        .hidden {
          visibility: hidden;
          display: none;
        }

        .menu :global(li) {
          list-style-type: none;
        }

        .menu :global(ul) {
          padding: 0px;
          margin: 0px;
        }

        @media screen and (max-width: ${CSS.MAX_WIDTH_MOBILE}px) {
          .menu {
            width: 100%;
          }
          .closed-menu {
            left: -${dimensions.width}px;
          }
        }
      `}</style>
    </div>
  );
};

export default NavMenu;
