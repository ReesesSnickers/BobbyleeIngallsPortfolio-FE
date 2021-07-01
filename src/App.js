import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import { ROUTES } from './utility/constants/routes';

const NewApp = () => {
  return (
    <main className="App">
      <Switch>
        <Route
          exact
          path={ROUTES.ROOT}
          render={() => <Redirect to={ROUTES.ABOUT} />}
        />
        <Route exact path={ROUTES.ABOUT} render={() => <AboutMe />} />
      </Switch>
      <style jsx>{`
        .App {
          width: 100vw;
          min-height: 100vh;
        }
      `}</style>
    </main>
  );
};

export default NewApp;
