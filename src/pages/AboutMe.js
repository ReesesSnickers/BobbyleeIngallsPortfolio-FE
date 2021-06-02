import React from 'react';
import Navbar from '../components/Navbar';

const NewApp = () => {
  return (
    <div className='pw'>
      <Navbar />

      <style jsx>{`
        div.pw {
          color: #ffffff;
          min-height: 100vh;
          background-color: black;
        }
      `}</style>
    </div>
  );
};

export default NewApp;
