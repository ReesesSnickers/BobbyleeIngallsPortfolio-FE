import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";

// Redux actions
import * as blogActions from "./pages/Blog/actions/blogActions";
import * as projectsActions from "./pages/Projects/actions/projectsActions";
import * as resumeActions from "./pages/Resume/actions/resumeActions";

// Layouts
import PageWrapper from "./layouts/PageWrapper";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

// Css
import "./App.css";

function App(props) {
  const goToPage = path => {
    props.history.push(path);
  };
  const goBack = () => {
    props.history.goBack();
  };

  return (
    <PageWrapper
      goBack={goBack}
      goToPage={goToPage}
      page={props.history.location.pathname}
    >
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/Home" />} />
          <Route
            exact
            path="/Home"
            render={() => <Home goToPage={goToPage} />}
          />
          <Route
            exact
            path="/Projects"
            render={() => (
              <Projects
                goBack={goBack}
                projectActions={props.actions.projects}
                projectState={props.projects.projects}
              />
            )}
          />
          <Route
            exact
            path="/Blog"
            render={() => (
              <Blog
                goBack={goBack}
                blogActions={props.actions.blog}
                blogState={props.blog.blog}
              />
            )}
          />
          <Route
            exact
            path="/Resume"
            render={() => (
              <Resume
                goBack={goBack}
                resumeActions={props.actions.resume}
                resumeState={props.resume.resume}
              />
            )}
          />
        </Switch>
      </div>
    </PageWrapper>
  );
}

// Bind the Redux state
function mapStateToProps({ blog, projects, resume }) {
  return { blog, projects, resume };
}

// Bind Action Creators
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      blog: bindActionCreators(blogActions, dispatch),
      projects: bindActionCreators(projectsActions, dispatch),
      resume: bindActionCreators(resumeActions, dispatch)
    }
  };
}

// connect function wrapped with withRouter to allow routing of children components
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
