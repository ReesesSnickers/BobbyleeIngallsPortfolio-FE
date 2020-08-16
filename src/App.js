import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Switch, Route, Redirect } from "react-router-dom";

// Redux actions
import * as blogActions from "./unUsedATM/Blog/actions/blogActions";
import * as projectsActions from "./pages/Projects/actions/projectsActions";
import * as resumeActions from "./unUsedATM/Resume/actions/resumeActions";

// Layouts
import PageWrapper from "./layouts/PageWrapper";

// Pages
import About from "./pages/About";
// import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
// import Resume from "./pages/Resume";
// import BlogPage from "./pages/BlogPage";
// import ProjectPage from "./pages/ProjectPage";
import UnknownRoute from "./pages/UnkownRoute";

// assets
import UserPhoto from "./static/ProfilePhoto.jpg";

// Css
import "./App.css";

// Utility
import { ROUTES } from "./utility/constants/routes";
import Feature from "./utility/featureConfig";
import { initialRedirect } from "./utility/initialRedirect";

function App(props) {
  const goToPage = (path) => {
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
      sidebarPhoto={UserPhoto}
    >
      <div className="App">
        <Switch>
          <Route
            exact
            path={ROUTES.ROOT}
            render={() => <Redirect to={initialRedirect()} />}
          />
          {Feature.about ? (
            <Route
              exact
              path={ROUTES.ABOUT}
              render={() => <About goToPage={goToPage} photo={UserPhoto} />}
            />
          ) : null}
          {Feature.projects ? (
            <Route
              exact
              path={ROUTES.PROJECTS}
              render={() => (
                <Projects
                  goBack={goBack}
                  projects={props.projects.projects.projects}
                  projectActions={props.actions.projects}
                  projectState={props.projects.projects}
                />
              )}
            />
          ) : /* <Route exact path="/Projects/:projectId" component={ProjectPage} /> */
          null}
          {/* <Route
            exact
            path="/Blog"
            render={() => (
              <Blog
                goBack={goBack}
                blogs={props.blog.blog.blogs}
                blogActions={props.actions.blog}
                blogState={props.blog.blog}
              />
            )}
          /> */}
          {/* <Route exact path="/Blog/:blogId" component={BlogPage} /> */}
          {/* <Route
            exact
            path="/Resume"
            render={() => (
              <Resume
                goBack={goBack}
                resumeActions={props.actions.resume}
                resumeState={props.resume.resume}
              />
            )}
          /> */}
          <Route exact path={ROUTES.UNKNOWN} render={() => <UnknownRoute />} />
          <Redirect to={ROUTES.UNKNOWN} />
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
      resume: bindActionCreators(resumeActions, dispatch),
    },
  };
}

// connect function wrapped with withRouter to allow routing of children components
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
