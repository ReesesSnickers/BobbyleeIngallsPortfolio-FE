export interface Skill {
  name: string;
  icon: string;
  level?: string;
}

export default interface Skills {
  category: string;
  skills: Skill[];
}
