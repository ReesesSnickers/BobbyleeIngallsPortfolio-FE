import React, { useEffect, useState } from "react";
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
import BlogPage from "./pages/BlogPage";
import ProjectPage from "./pages/ProjectPage";

// assets
import UserPhoto from "./static/ProfilePhoto.jpg";

// Css
import "./App.css";

function App(props) {
  const [pageWidth, setPageWidth] = useState();
  const goToPage = path => {
    props.history.push(path);
  };
  const goBack = () => {
    props.history.goBack();
  };
  const setDemensions = () => {
    if (pageWidth !== window.innerWidth) {
      setPageWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", setDemensions.bind(this));
    if (props.blog.blog.blogs && props.blog.blog.blogs.length === 0) {
      props.actions.blog.fetchBlogs();
    }
    if (
      props.projects.projects.projects &&
      props.projects.projects.projects.length === 0
    ) {
      props.actions.projects.fetchProjects();
    }
  });
  return (
    <>
      {window.innerWidth >= 930 && (
        <PageWrapper
          goBack={goBack}
          goToPage={goToPage}
          page={props.history.location.pathname}
          sidebarPhoto={UserPhoto}
        >
          <div className="App">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/Home" />} />
              <Route
                exact
                path="/Home"
                render={() => <Home goToPage={goToPage} photo={UserPhoto} />}
              />
              <Route
                exact
                path="/Projects"
                render={() => (
                  <Projects
                    goBack={goBack}
                    projects={props.projects.projects.projects}
                    projectActions={props.actions.projects}
                    projectState={props.projects.projects}
                  />
                )}
              />
              <Route
                exact
                path="/Projects/:projectId"
                component={ProjectPage}
              />
              <Route
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
              />
              <Route exact path="/Blog/:blogId" component={BlogPage} />
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
      )}
      {window.innerWidth < 930 && (
        <div>sorry mobile responsiveness development in progress</div>
      )}
    </>
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
