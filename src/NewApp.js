import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import './App.css';
import { ROUTES } from './utility/constants/routes';

const NewApp = () => {
  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path={ROUTES.ROOT}
          render={() => <Redirect to={ROUTES.ABOUT} />}
        />
        <Route exact path={ROUTES.ABOUT} render={() => <AboutMe />} />
      </Switch>
    </div>
  );
};

export default NewApp;
