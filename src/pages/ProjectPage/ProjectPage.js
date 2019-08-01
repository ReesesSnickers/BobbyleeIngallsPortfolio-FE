import React from "react";

import UserPhoto from "../../assets/testavatar.jpg";
import WalmartLogo from "../../assets/Walmart-logo.jpg";

const ProjectPage = ({ match, history }) => {
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
  const project = projectConfig.find(
    element => element.id === match.params.projectId
  );

  return (
    <section className="portfolio-projectpage-wrapper">
      <section className="portfolio-projectpage-wrapper">
        <section className="portfolio-projectpage-header">
          <div className="portfolio-projectpage-header-createdclosegroup">
            <h2 className="portfolio-projectpage-header-created">
              {project.created}
            </h2>
            <button
              className="portfolio-projectpage-header-exit"
              onClick={() => history.goBack()}
            >
              X
            </button>
          </div>
          <h1 className="portfolio-projectpage-header-name">{project.title}</h1>
          <span className="portfolio-projectpage-header-description">
            {project.description}
          </span>
        </section>
        <div className="portfolio-projectpage-header-createdlivecodegroup">
          {project.sitePreview !== "" && (
            <a
              href={project.sitePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-projectpage-header-createdclosegroup-livecode"
            >
              Preview Site
            </a>
          )}
          {project.codeLocation !== "" && (
            <a
              href={project.codeLocation}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-projectpage-header-createdclosegroup-livecode"
            >
              View Code
            </a>
          )}
        </div>
        <div className="portfolio-projectpage-photo">
          <img src={project.fullScreenPhoto} alt={project.title} />
        </div>
      </section>
    </section>
  );
};

export default ProjectPage;
