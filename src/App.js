import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import BadRoute from './pages/BadRoute';
// import Projects from './pages/Projects';
import { ROUTES } from './utility/constants/routes';

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.ABOUT} />} />
        <Route path={ROUTES.ABOUT} element={<AboutMe />} />
        {/* <Route path={ROUTES.PROJECTS} element={<Projects />} /> */}
        <Route path="*" element={<BadRoute />} />
      </Routes>
      <style jsx>{`
        .App {
          width: 100vw;
          min-height: 100vh;
        }
      `}</style>
    </main>
  );
};

export default App;
