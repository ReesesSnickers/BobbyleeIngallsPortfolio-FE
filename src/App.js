import React from 'react';
import { Outlet } from 'react-router-dom';
import Colors from './utility/constants/colors';
import Navbar from './components/Navbar';

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
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </main>
  );
};

export default App;
