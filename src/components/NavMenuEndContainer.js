import React from 'react';
import Feature from '../utility/featureConfig';
import Colors from '../utility/constants/colors';
import BugReportNavMenuLink from './BugReportNavMenuLink';
import CoffeeDonationContainer from './CoffeeDonationContainer';
import CSS from '../utility/constants/CSS';

const NavMenuEndContainer = ({ closeMenu }) => {
  return (
    <section className="end-container">
      <ul>
        <li onClick={closeMenu}>
          <BugReportNavMenuLink />
        </li>
      </ul>
      {Feature.showDevCoffeeSupport ? <CoffeeDonationContainer /> : null}
      <style jsx>{`
        section {
          padding: 10px;
        }
        .end-container li {
          padding: 10px;
          height: 60px;
          border-radius: ${CSS.NAV_LINK_BORDER_RADIUS};
          overflow: hidden;
        }
        .end-container li:hover {
          -webkit-box-shadow: 0px 0px 3px 5px ${Colors.BRIGHT_GREEN};
          box-shadow: 0px 0px 3px 5px ${Colors.BRIGHT_GREEN};
          -o-transition: all 0.2s ease-in;
          -webkit-transition: all 0.2s ease-in;
          transition: all 0.2s ease-in;
        }
      `}</style>
    </section>
  );
};

export default NavMenuEndContainer;
