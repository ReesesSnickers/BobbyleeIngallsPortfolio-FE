import React from 'react';
import Feature from '../utility/featureConfig';
import Colors from '../utility/constants/colors';
import BugReportNavMenuLink from './BugReportNavMenuLink';
import CoffeeDonationContainer from './CoffeeDonationContainer';

const NavMenuEndContainer = ({ closeMenu }) => {
  return (
    <section className="end-container">
      <ul>
        <li onClick={closeMenu}>
          <BugReportNavMenuLink />
        </li>
      </ul>
      {true ? <CoffeeDonationContainer /> : null}
      <style jsx>{`
        section {
          padding: 10px;
        }
        .end-container li {
          padding: 10px;
          height: 60px;
          border-radius: 3px;
          overflow: hidden;
        }
        .end-container li:hover {
          box-shadow: 0px 0px 3px 5px ${Colors.BRIGHT_GREEN};
          -moz-transition: all 0.2s ease-in;
          -o-transition: all 0.2s ease-in;
          -webkit-transition: all 0.2s ease-in;
          transition: all 0.2s ease-in;
        }
      `}</style>
    </section>
  );
};

export default NavMenuEndContainer;
