import type Project from "@/types/projects";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  Award,
  Users,
  Code,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

interface ProjectsProps {
  projects: Project[];
}

// Function to categorize projects based on keywords in title/description
function categorizeProject(
  project: Project
): "work" | "initiative" | "open-source" | "personal" {
  const title = project.title.toLowerCase();
  const description = project.description.toLowerCase();

  if (title.includes("open source") || title.includes("contributor"))
    return "open-source";
  if (
    title.includes("initiative") ||
    title.includes("bootcamp") ||
    title.includes("mentor") ||
    description.includes("community") ||
    description.includes("hackathon") ||
    title.includes("tech talk") ||
    title.includes("accountability") ||
    title.includes("modernization")
  )
    return "initiative";
  if (
    title.includes("platform") ||
    title.includes("commerce") ||
    description.includes("enterprise") ||
    description.includes("saas") ||
    title.includes("mytech") ||
    title.includes("fulfillment") ||
    title.includes("toggles")
  )
    return "work";
  return "personal";
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "work":
      return <Briefcase className="w-5 h-5" />;
    case "initiative":
      return <Users className="w-5 h-5" />;
    case "open-source":
      return <Code className="w-5 h-5" />;
    default:
      return <Award className="w-5 h-5" />;
  }
}

function getCategoryLabel(category: string) {
  switch (category) {
    case "work":
      return "Professional Project";
    case "initiative":
      return "Community Initiative";
    case "open-source":
      return "Open Source";
    default:
      return "Personal Project";
  }
}

function getCategoryColor(category: string) {
  switch (category) {
    case "work":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "initiative":
      return "bg-green-100 text-green-800 border-green-200";
    case "open-source":
      return "bg-purple-100 text-purple-800 border-purple-200";
    default:
      return "bg-orange-100 text-orange-800 border-orange-200";
  }
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function Projects({ projects = [] }: ProjectsProps) {
  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Featured Projects & Initiatives
          </h2>
          <div className="text-center text-gray-600">
            <p>Projects will be displayed here once content is added.</p>
          </div>
        </div>
      </section>
    );
  }

  // Show only featured projects, limited to 6, or first 6 if no featured projects
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 6);
  const displayProjects =
    featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects & Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of professional projects, community initiatives, open
            source contributions, and personal experiments that demonstrate my
            passion for technology and impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayProjects.map((project, index) => {
            const category = categorizeProject(project);
            const slug = createSlug(project.title);

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    height={300}
                    width={500}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div
                    className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(
                      category
                    )}`}
                  >
                    {getCategoryIcon(category)}
                    {getCategoryLabel(category)}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {(project.technologies || [])
                      .slice(0, 4)
                      .map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm rounded-full border border-blue-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    {(project.technologies || []).length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        +{(project.technologies || []).length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={`/projects/${slug}`}
                      className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {category === "initiative" ? "Learn More" : "Live Demo"}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see more of my work?</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
