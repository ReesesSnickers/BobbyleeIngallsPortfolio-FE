import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Colors from '../../utility/constants/colors';

const NavIconButton = ({
  ariaLabel,
  href,
  icon,
  useButton = false,
  onClick,
  className,
}) => {
  const appliedClassName = className ? ` ${className}` : '';
  return (
    <>
      {useButton ? (
        <button
          onClick={onClick}
          className={`neumorphism-button${appliedClassName}`}
          aria-label={ariaLabel}
        >
          <FontAwesomeIcon icon={icon} />
        </button>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`neumorphism-button${appliedClassName}`}
          aria-label={ariaLabel}
        >
          <FontAwesomeIcon icon={icon} />
        </a>
      )}
      <style jsx>{`
        a,
        button {
          color: ${Colors.WHITE};
          opacity: 0.9;
        }

        a.neumorphism-button,
        button.neumorphism-button {
          margin-left: 20px;
          margin-right: 20px;
          background: ${Colors.BLACK};
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

        a.neumorphism-button:hover,
        button.neumorphism-button:hover {
          text-shadow: 0 0 5px ${Colors.YELLOW};
        }

        a.neumorphism-button:focus,
        a.neumorphism-button:active,
        a.neumorphism-button:hover,
        button.neumorphism-button:focus,
        button.neumorphism-button:active,
        button.neumorphism-button:hover {
          box-shadow: -1px -1px 3px rgba(0, 0, 0, 0.1),
            -2px -2px 6px rgba(76, 76, 76, 0.8),
            inset -2px -2px 10px rgba(0, 0, 0, 0.05),
            inset -2px -2px 10px rgba(76, 76, 76, 0.5);
        }

        a.neumorphism-button:active :global(svg path),
        a.neumorphism-button:hover :global(svg path),
        button.neumorphism-button:active :global(svg path),
        button.neumorphism-button:hover :global(svg path) {
          fill: ${Colors.BRIGHT_GREEN};
        }
      `}</style>
    </>
  );
};

export default NavIconButton;
