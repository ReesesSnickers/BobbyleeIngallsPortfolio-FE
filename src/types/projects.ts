export default interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  solutions?: string[];
  challenges?: string[];
  impact?: string[];
  lessons?: string[];
  timeline?: string;
  team?: string[];
  type: "work" | "initiative" | "open-source" | "personal";
}
