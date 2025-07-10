import Skills from "@/types/skills";

const skillsData: Skills[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: "⚛️", level: "Expert" },
      { name: "TypeScript", icon: "🔷", level: "Expert" },
      { name: "JavaScript", icon: "🟨", level: "Expert" },
      { name: "HTML/CSS", icon: "🎨", level: "Expert" },
      { name: "Responsive Design", icon: "📱", level: "Expert" },
      { name: "Accessibility (WCAG)", icon: "♿", level: "Advanced" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: "🟢", level: "Expert" },
      { name: "GraphQL", icon: "🔗", level: "Advanced" },
      { name: "RESTful APIs", icon: "🌐", level: "Expert" },
      { name: "Microservices", icon: "🔧", level: "Advanced" },
      { name: "Express.js", icon: "🚀", level: "Advanced" },
      { name: "C#", icon: "🔵", level: "Intermediate" },
    ],
  },
  {
    category: "Database & Storage",
    skills: [
      { name: "MongoDB", icon: "🍃", level: "Advanced" },
      { name: "Azure SQL", icon: "🗄️", level: "Advanced" },
      { name: "Azure Cosmos DB", icon: "🌌", level: "Intermediate" },
      { name: "PostgreSQL", icon: "🐘", level: "Intermediate" },
      { name: "Microsoft Access", icon: "📊", level: "Advanced" },
      { name: "Database Design", icon: "🏗️", level: "Advanced" },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "Azure DevOps", icon: "☁️", level: "Advanced" },
      { name: "CI/CD Pipelines", icon: "🔄", level: "Advanced" },
      { name: "Azure Functions", icon: "⚡", level: "Intermediate" },
      { name: "Docker", icon: "🐳", level: "Intermediate" },
      { name: "Git", icon: "📝", level: "Expert" },
      { name: "Environment Config", icon: "⚙️", level: "Advanced" },
    ],
  },
  {
    category: "Enterprise & Integration",
    skills: [
      { name: "ServiceNow", icon: "🎫", level: "Advanced" },
      { name: "Active Directory", icon: "🔐", level: "Intermediate" },
      { name: "PowerShell", icon: "💻", level: "Advanced" },
      { name: "Adobe Analytics", icon: "📈", level: "Intermediate" },
      { name: "Electron", icon: "⚛️", level: "Intermediate" },
      { name: "Windows Desktop", icon: "🖥️", level: "Advanced" },
    ],
  },
  {
    category: "Leadership & Process",
    skills: [
      { name: "Technical Leadership", icon: "👥", level: "Expert" },
      {
        name: "Cross-Functional Collaboration",
        icon: "🤝",
        level: "Expert",
      },
      { name: "Agile/Scrum", icon: "🔄", level: "Advanced" },
      { name: "Technical Mentorship", icon: "🎓", level: "Advanced" },
      { name: "Documentation", icon: "📚", level: "Expert" },
      { name: "Risk Assessment", icon: "⚠️", level: "Advanced" },
    ],
  },
];

export default skillsData;
