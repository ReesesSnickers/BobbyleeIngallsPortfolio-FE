import Hero from "./hero";
import Experience from "./experiences";
import Project from "./projects";
import Contact from "./contact";
import Skills from "./skills";

export default interface Portfolio {
  hero: Hero;
  projects: Project[];
  experience: Experience[];
  skills: Skills[];
  contact: Contact;
}
