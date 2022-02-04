import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faCaravan } from '@fortawesome/free-solid-svg-icons';
import { Messages } from '../utility/constants/messages';

const BadRoute = () => {
  return (
    <div className="badroute-wrapper">
      <div className="car-container">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faCaravan} />
        </div>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faCarSide} />
        </div>
      </div>
      <h1>Oops!</h1>
      <p>{Messages.BAD_ROUTE}</p>
      <style jsx>{`
        .badroute-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .car-container {
          display: flex;
          flex-direction: row;
        }
        .icon-wrapper {
          font-size: 100px;
        }
        h1 {
          margin: 0px;
        }
        :global(.page) {
          height: calc(100vh - 122px);
        }
      `}</style>
    </div>
  );
};

export default BadRoute;
