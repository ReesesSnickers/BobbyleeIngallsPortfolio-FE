import React from 'react';
import Navbar from '../components/Navbar';
import Colors from '../utility/constants/colors';

const BadRoute = () => {
  return (
    <div className="pw">
      <Navbar />
      Bad Route
      <style jsx>{`
        div.pw {
          color: ${Colors.WHITE};
          min-height: 100vh;
          background-color: black;
        }
      `}</style>
    </div>
  );
};

export default BadRoute;
