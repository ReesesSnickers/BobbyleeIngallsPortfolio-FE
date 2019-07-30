import React, { useState } from "react";

import ProjectCardList from "../../components/ProjectsCardList";
import ProjectCardDialog from "../../components/ProjectCardDialog";

import UserPhoto from "../../assets/testavatar.jpg";
import WalmartLogo from "../../assets/Walmart-logo.jpg";

const Projects = ({ projectActions, projectState }) => {
  const [showDialog, toggleShowDialog] = useState(false);

  const projectConfig = [
    {
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
      title: "Bobbylee Ingalls Portfolio",
      url: UserPhoto,
      description: "My current portfolio you are currently viewing.",
      created: "PENDING",
      codeLocation: "",
      sitePreview: "",
      fullScreenPhoto: ""
    },
    {
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
      title: "Test Title",
      url: UserPhoto,
      description: "this is a discription",
      created: "date",
      codeLocation: "",
      sitePreview: "",
      fullScreenPhoto: ""
    },
    {
      title: "Test Title",
      url: UserPhoto,
      description: "this is a discription",
      created: "date",
      codeLocation: "",
      sitePreview: "",
      fullScreenPhoto: ""
    },
    {
      title: "Test Title",
      url: UserPhoto,
      description: "this is a discription",
      created: "date",
      codeLocation: "",
      sitePreview: "",
      fullScreenPhoto: ""
    }
  ];
  return (
    <>
      {!showDialog && (
        <section className="portfolio-projects-wrapper">
          <div className="portfolio-projects-list">
            <ProjectCardList
              array={projectConfig}
              setProject={projectActions.setProject}
              onClick={() => toggleShowDialog(true)}
            />
          </div>
        </section>
      )}
      {showDialog && (
        <section>
          <ProjectCardDialog
            onClick={() => toggleShowDialog(false)}
            project={projectState.project}
          />
        </section>
      )}
    </>
  );
};

export default Projects;
