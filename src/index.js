import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from './utility/constants/routes';
import App from './App';
import AboutMe from './pages/AboutMe';
import ProjectPage from './pages/projects/ProjectPage';
import ProjectsPage from './pages/projects/ProjectsPage';
import BadRoute from './pages/BadRoute';

import _JSXStyle from 'styled-jsx/style';
if (typeof global !== 'undefined') {
  Object.assign(global, { _JSXStyle });
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.ROOT} element={<App />}>
        <Route path={ROUTES.ROOT} element={<Navigate to={ROUTES.ABOUT} />} />
        <Route path={ROUTES.ABOUT} element={<AboutMe />} />
        <Route path="projects" element={<ProjectsPage />}>
          <Route path=":title" element={<ProjectPage />} />
        </Route>
        <Route path="*" element={<BadRoute />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
