import skillsData from "./skills";
import contactData from "./contact";
import projectsData from "./projects";
import experienceData from "./experience";
import heroData from "./hero";
import Portfolio from "@/types/portfolio";

const portfolioData: Portfolio = {
  hero: heroData,
  projects: projectsData,
  experience: experienceData,
  skills: skillsData,
  contact: contactData,
};

export default portfolioData;
