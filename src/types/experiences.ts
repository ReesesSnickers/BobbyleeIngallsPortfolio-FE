export default interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate?: string | null;
  location?: string;
  description: string;
  achievements?: string[];
  technologies?: string[];
}
