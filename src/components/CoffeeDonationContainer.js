import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import Colors from '../utility/constants/colors';

/* DEV NOTE: Apply a donation tied to a payment gateway service */
/* DEV NOTE: need to apply a infinate animation that helps guide users to donate */

const CoffeeDonationContainer = () => {
  return (
    <section>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faMugHot} />
      </div>
      <h5>
        Like what you see? Please{' '}
        {/* <a href="#" target="_blank" rel="noopener noreferrer"> */}
        donate
        {/* </a>{' '} */}
        and support my coffee addiction!
      </h5>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faMugHot} />
      </div>
      <style jsx>{`
        a {
          color: ${Colors.BRIGHT_GREEN};
          text-decoration: none;
        }
        a:visited {
          color: ${Colors.BRIGHT_GREEN};
        }
        h5 {
          text-align: center;
        }
        section {
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
        }
        .icon-wrapper:first-of-type {
          margin-right: 10px;
        }
        .icon-wrapper:last-of-type {
          margin-left: 10px;
        }
      `}</style>
    </section>
  );
};

export default CoffeeDonationContainer;
