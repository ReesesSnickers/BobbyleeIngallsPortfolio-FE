export default interface Project {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  type: "work" | "initiative" | "open-source" | "personal";
}
