export default interface Hero {
  name: string;
  tagline: string;
  description: string;
  avatar?: string;
  resumeUrl?: string;
  social: {
    github?: string;
    linkedin?: string;
    email?: string;
    twitter?: string;
  };
}
