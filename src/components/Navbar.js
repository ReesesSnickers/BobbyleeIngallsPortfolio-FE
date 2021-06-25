import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import URLs from '../utility/constants/urls';

// Dev note: need to look into a glow efect to the icon's on hover b- starting point https://codepen.io/dig-lopes/pen/WLVGda
// Need to apply proper hrefs to new page
// Need to apply a dropdown box

const Navbar = () => {
  return (
    <nav>
      <a href='#' className='neumorphism-button' aria-label='Menu'>
        <FontAwesomeIcon icon={faBars} />
      </a>
      <a href={URLs.FACEBOOK} target="_blank" rel="noopener noreferrer" className='neumorphism-button' aria-label='Facebook Profile'>
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href={URLs.LINKEDIN} target="_blank" rel="noopener noreferrer" className='neumorphism-button' aria-label='LinkedIn Profile'>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href={URLs.CODEPEN} target="_blank" rel="noopener noreferrer" className='neumorphism-button' aria-label='Codepen Profile'>
        <FontAwesomeIcon icon={faCodepen} />
      </a>
      <h1 className='neumorphism-button'>Bobbylee Ingalls Portfolio</h1>
      <style jsx>{`
        nav {
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
        }

        h1 {
          opacity: 0.9;
          margin-right: 30px;
        }

        a:visited {
          color: #ffffff;
        }

        a {
          opacity: 0.9;
        }
        a.neumorphism-button:first-of-type {
          margin-left: 30px;
        }

        a.neumorphism-button {
          margin-left: 20px;
          margin-right: 20px;
          background: #000000;
          height: 40px;
          width: 40px;
          border-radius: 50%;
          border: none;
          outline: none;
          display: -webkit-flex;
          display: -moz-flex;
          display: -ms-flex;
          display: -o-flex;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          box-shadow: -1px -1px 3px rgba(0, 0, 0, 0.1),
            -2px -2px 6px rgba(76, 76, 76, 0.8);
        }

        a.neumorphism-button:hover {
          box-shadow: -1px -1px 3px rgba(0, 0, 0, 0.1),
            -2px -2px 6px rgba(76, 76, 76, 0.8),
            inset -2px -2px 10px rgba(0, 0, 0, 0.05),
            inset -2px -2px 10px rgba(76, 76, 76, 0.5);
          text-shadow: 0 0 5px #ffee10;
        }

        a.neumorphism-button:focus {
          box-shadow: -1px -1px 3px rgba(0, 0, 0, 0.1),
            -2px -2px 6px rgba(76, 76, 76, 0.8),
            inset -2px -2px 10px rgba(0, 0, 0, 0.05),
            inset -2px -2px 10px rgba(76, 76, 76, 0.5);
        }

        a.neumorphism-button:active {
          box-shadow: -1px -1px 3px rgba(0, 0, 0, 0.1),
            -2px -2px 6px rgba(76, 76, 76, 0.8),
            inset -2px -2px 10px rgba(0, 0, 0, 0.05),
            inset -2px -2px 10px rgba(76, 76, 76, 0.5);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
