import React, { useEffect } from "react";
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

import UserPhoto from "./assets/testavatar.jpg";
import WalmartLogo from "./assets/Walmart-logo.jpg";

// Css
import "./App.css";

function App(props) {
  const goToPage = path => {
    props.history.push(path);
  };
  const goBack = () => {
    props.history.goBack();
  };

  const projectConfig = [
    {
      id: "project1",
      title: "MyTech",
      url: WalmartLogo,
      description:
        "A modular host for other applications. Designed to be a hosting point for Walmart Home Office Associates to have a singular location about them and their assigned devices in the company. Unfortunately for further information about this application and my participation you will need to contact Walmart",
      created: "2019",
      codeLocation: "",
      sitePreview: "",
      fullScreenPhoto: WalmartLogo
    },
    {
      id: "project2",
      title: "MyTech - Ordering",
      url: WalmartLogo,
      description:
        "A hosted application within the Walmart MyTech application that helps simplify Wlamart Home Office associate's in their device ordering processes. Weather they need to upgrade their laptop or want to order a new device from what they have. Unfortunately for further information about this application and my participation you will need to contact Walmart",
      created: "8/2019",
      codeLocation: "",
      sitePreview: "",
      fullScreenPhoto: WalmartLogo
    },
    {
      id: "project3",
      title: "Christmas Secret Santa Game",
      url: UserPhoto,
      description:
        "A spin off the White elephant game, this application would log players and keep track of whos turn it is with fantastic beats by Charles King.",
      created: "12/2018",
      codeLocation:
        "https://github.com/ReesesSnickers/ChristmasSecretSantaGame",
      sitePreview: "",
      fullScreenPhoto: ""
    },
    {
      id: "project4",
      title: "Bobbylee Ingalls Portfolio",
      url: UserPhoto,
      description: "My current portfolio you are currently viewing.",
      created: "PENDING",
      codeLocation: "",
      sitePreview: "",
      fullScreenPhoto: ""
    },
    {
      id: "project5",
      title: "Home Office Self Service",
      url: WalmartLogo,
      description:
        "A self service application for Home Office Windows devices that showed useful information, links and hosted useful scripts to install software or correct common errors in the environment. Unfortunately for further information about this application and my participation you will need to contact Walmart",
      created: "2017",
      codeLocation: "",
      sitePreview: "",
      fullScreenPhoto: WalmartLogo
    },
    {
      id: "project6",
      title: "Self Service as a Service",
      url: WalmartLogo,
      description:
        "A information assistance platform for the Home Office Client Support team within Walmart. The application hosted information to help correct common issues before having the need to call into the support line. It also connected to the Remedy 7 ticketing platform and later connected to the ServiceNow ticketing platform in the case the troubleshooting steps did not correct the issue. Did I mention it also showed the current Issues-in-Progress to help prevent calls over known issues? Unfortunately for further information about this application and my participation you will need to contact Walmart.",
      created: "2017",
      codeLocation: "",
      sitePreview: "",
      fullScreenPhoto: WalmartLogo
    },
    {
      id: "project7",
      title: "Test Title",
      url: UserPhoto,
      description: "this is a discription",
      created: "date",
      codeLocation: "",
      sitePreview: "",
      fullScreenPhoto: ""
    },
    {
      id: "project8",
      title: "Test Title",
      url: UserPhoto,
      description: "this is a discription",
      created: "date",
      codeLocation: "",
      sitePreview: "",
      fullScreenPhoto: ""
    },
    {
      id: "project9",
      title: "Test Title",
      url: UserPhoto,
      description: "this is a discription",
      created: "date",
      codeLocation: "",
      sitePreview: "",
      fullScreenPhoto: ""
    }
  ];

  useEffect(() => {
    if (props.blog.blog.blogs && props.blog.blog.blogs.length === 0) {
      props.actions.blog.fetchBlogs();
    }
  }, [props.blog.blog.blogs]);

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
                projects={projectConfig}
                projectActions={props.actions.projects}
                projectState={props.projects.projects}
              />
            )}
          />
          <Route exact path="/Projects/:projectId" component={ProjectPage} />
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
