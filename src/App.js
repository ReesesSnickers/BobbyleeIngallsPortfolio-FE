import React from 'react';
import { Outlet } from 'react-router-dom';
import Colors from './utility/constants/colors';
import Navbar from './components/Navbar';

// DEV NOTE: Run CSS threw Autoprefixer on occasion https://autoprefixer.github.io/

const App = () => {
  return (
    <main className="App">
      <div className="pw">
        <Navbar />
        <div className="page">
          <Outlet />
        </div>
      </div>
      <style jsx>{`
        .App {
          width: 100vw;
          min-height: 100vh;
        }
        .pw {
          color: ${Colors.WHITE};
          min-height: 100vh;
          background-color: ${Colors.BLACK};
        }
        .page {
          padding: 72px 30px 50px 30px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
      `}</style>
    </main>
  );
};

export default App;
