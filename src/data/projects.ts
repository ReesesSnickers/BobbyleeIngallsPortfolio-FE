import Project from "@/types/projects";

const projectsData: Project[] = [
  {
    title: "Laptop Fulfillment Process - End-to-End Device Lifecycle",
    description:
      "Led engineering efforts for major DLE Laptop Process initiatives, driving technical design and execution for workflows spanning device request, procurement, imaging, and delivery. Delivered critical PoC components within one month, securing funding and architectural support for scaled implementation.",
    image: "/DLE.png?height=300&width=500",
    technologies: [
      "React",
      "TypeScript",
      "Microservices",
      "CI/CD",
      "Azure DevOps",
      "ServiceNow",
      "Node.js",
      "GraphQL",
      "Azure SQL",
    ],
    type: "work",
    featured: true,
  },
  {
    title: "MyTech - Enterprise Self-Service IT Platform",
    description:
      "Contributed from PoC through platform maturity, scaling MyTech into a widely adopted enterprise tool supporting associates across Canada, U.S., Mexico, and Puerto Rico. Navigated architectural evolution from monorepo to robust microservices platform.",
    image: "/mytech.png?height=300&width=500",
    technologies: [
      "React",
      "TypeScript",
      "Microservices",
      "Azure Functions",
      "ServiceNow",
      "Adobe Analytics",
      "Azure Cosmos DB",
      "MongoDB",
      "GraphQL",
    ],
    liveUrl: "https://mytech.walmart.com",
    type: "work",
    featured: true,
  },
  {
    title: "Guide Toggles - Feature Access Management Tool",
    description:
      "Maintained and enhanced internal tool for managing role- and region-based feature toggles across enterprise applications. Supported engineering teams organization-wide in tool adoption and integration best practices.",
    image: "/guidetoggles.png?height=300&width=500",
    technologies: [
      "React",
      "TypeScript",
      "Microservices",
      "Azure DevOps",
      "CI/CD",
      "Node.js",
      "Azure SQL",
      "RESTful APIs",
    ],
    type: "work",
    featured: true,
  },
  {
    title: "Accessibility Alignment & WCAG Training Initiative",
    description:
      "Led accessibility improvement efforts across 10+ internal applications, partnering with stakeholders and vendors to baseline WCAG 2.1 compliance. Facilitated training sessions and established team-wide accessibility best practices.",
    image: "/wcag.png?height=300&width=500",
    technologies: [
      "React",
      "JavaScript",
      "WCAG 2.1",
      "ARIA",
      "Accessibility Testing",
      "Training & Documentation",
    ],
    type: "initiative",
    featured: true,
  },
  {
    title: "Self Service as a Service (SSaaS) Platform",
    description:
      "Designed and delivered scalable internal web portal empowering associates across Home Office, Distribution Centers, and Store locations to resolve IT issues independently. Integrated dynamic Issues in Progress dashboard and intelligent ticketing logic.",
    image: "/ssaas.png?height=300&width=500",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Azure DevOps",
      "PowerShell",
      "RESTful APIs",
    ],
    type: "work",
    featured: true,
  },
  {
    title: "Home Office Self Service (HOSS) v2.0.0",
    description:
      "Core developer in rebuilding desktop application from lightweight script launcher into full-featured ElectronJS and React-based platform. Enabled distribution across all Walmart Home Office Windows clients.",
    image: "/hoss.png?height=300&width=500",
    technologies: [
      "Electron",
      "React",
      "JavaScript",
      "PowerShell",
      "MongoDB",
      "Windows Integration",
    ],
    type: "work",
    featured: true,
  },
  {
    title: "Luna Ravens Witchery - E-Commerce PoC",
    description:
      "Partnered with independent artisan to design custom e-commerce platform replacing Etsy storefront. Architected full product lifecycle including catalog management, cart experience, and order handling.",
    image: "/luna.png?height=300&width=500",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "GraphQL",
      "CMS",
      "E-commerce",
    ],
    type: "work",
    featured: true,
  },
  {
    title: "New Republic Ark - Gaming Donation Portal",
    description:
      "Developed MERN stack prototype for Ark Survival Evolved game cluster donation portal. Built clean, responsive interface replacing error-prone Excel process with PayPal/Stripe integration.",
    image: "/republicark.png?height=300&width=500",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Apollo GraphQL",
      "Stripe",
      "PayPal",
    ],
    type: "work",
    featured: true,
  },
  {
    title: "Bobbylee Ingalls Portfolio",
    description:
      "Personal portfolio showcasing background and career accomplishments. Over-engineered on purpose to demonstrate ability with diverse technologies including MERN stack, Strapi CMS, and GraphQL.",
    image: "/bip.png?height=300&width=500",
    technologies: [
      "MongoDB Atlas",
      "React",
      "Node.js",
      "Heroku",
      "Netlify",
      "Strapi",
      "GraphQL",
    ],
    liveUrl: "https://bobbyleeingalls.dev",
    githubUrl: "https://github.com/bobbyleeingalls/portfolio",
    type: "personal",
    featured: true,
  },
  {
    title: "Tool Room Accountability System - 22nd AMXS",
    description:
      "Identified critical $50K-$250K inventory accountability gap and designed custom tracking system using Microsoft Access and Excel. Achieved 100% accountability within 30 days with 60% improvement in repair throughput.",
    image: "/tool.png?height=300&width=500",
    technologies: [
      "Microsoft Access",
      "Excel",
      "Database Design",
      "Process Improvement",
      "Inventory Management",
    ],
    type: "initiative",
    featured: true,
  },
];

export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => createSlug(project.title) === slug);
}

export function getAllProjectSlugs() {
  return projectsData.map((project) => createSlug(project.title));
}

export default projectsData;
