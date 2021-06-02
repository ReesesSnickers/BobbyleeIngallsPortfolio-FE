import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <a href='#' className='neumorphism-button' aria-label='Menu'>
        =
      </a>
      <a href='#' className='neumorphism-button' aria-label='Facebook Profile'>
        F
      </a>
      <a href='#' className='neumorphism-button' aria-label='LinkedIn Profile'>
        Lin
      </a>
      <a href='#' className='neumorphism-button' aria-label='Twitter Profile'>
        T
      </a>
      <h1>Bobbylee Ingalls Portfolio</h1>
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
        }
        h1 {
          opacity: 0.9;
        }
        a:visited {
          color: #ffffff
        }
        a {
            opacity: 0.9;
        }
        a.neumorphism-button {
          margin-left: 20px;
          margin-right: 20px;
          color: #ffffff

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
