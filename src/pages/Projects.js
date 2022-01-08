import React from 'react';
import Navbar from '../components/Navbar';
import Colors from '../utility/constants/colors';

const Projects = () => {
  return (
    <div className="pw">
      <Navbar />
      <div className="page">projects</div>
      <style jsx>{`
        div.pw {
          color: ${Colors.WHITE};
          min-height: 100vh;
          background-color: black;
        }

        .page {
          padding: 72px 30px 50px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Projects;
