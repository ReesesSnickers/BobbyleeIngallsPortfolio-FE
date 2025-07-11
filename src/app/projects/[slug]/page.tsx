import Head from "next/head";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Award,
  Briefcase,
  Code,
  CheckCircle,
} from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import Project from "@/types/projects";

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
      return <Briefcase className="w-6 h-6" />;
    case "initiative":
      return <Users className="w-6 h-6" />;
    case "open-source":
      return <Code className="w-6 h-6" />;
    default:
      return <Award className="w-6 h-6" />;
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

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <Link href="/projects" className="text-blue-600 hover:text-blue-800">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const category = categorizeProject(project);
  const projectWithCategory = { ...project, slug: params.slug, category };

  return (
    <>
      <Head>
        <title>{projectWithCategory.title} - Bobbylee Ingalls</title>
        <meta name="description" content={projectWithCategory.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href={`https://bobbyleeingalls.dev/projects/${projectWithCategory.slug}`}
        />
        <meta
          property="og:title"
          content={`${projectWithCategory.title} - Bobbylee Ingalls`}
        />
        <meta
          property="og:description"
          content={projectWithCategory.description}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://bobbyleeingalls.dev/projects/${projectWithCategory.slug}`}
        />
        {projectWithCategory.image && (
          <meta property="og:image" content={projectWithCategory.image} />
        )}
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <nav className="flex items-center gap-4 mb-6">
              <Link
                href="/projects"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Projects
              </Link>
            </nav>

            <div className="flex items-start gap-4 mb-6">
              <div
                className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium border ${getCategoryColor(
                  projectWithCategory.category
                )}`}
              >
                {getCategoryIcon(projectWithCategory.category)}
                {getCategoryLabel(projectWithCategory.category)}
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {projectWithCategory.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {projectWithCategory.description}
            </p>

            <div className="flex gap-4 mt-6">
              {projectWithCategory.liveUrl && (
                <a
                  href={projectWithCategory.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <ExternalLink className="w-5 h-5" />
                  {projectWithCategory.category === "initiative"
                    ? "Learn More"
                    : "Live Demo"}
                </a>
              )}
              {projectWithCategory.githubUrl && (
                <a
                  href={projectWithCategory.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Project Image */}
          <div className="mb-8">
            <img
              src={
                projectWithCategory.image ||
                "/placeholder.svg?height=400&width=800"
              }
              alt={`${projectWithCategory.title} project screenshot`}
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Project Overview
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {projectWithCategory.description}
                  </p>
                </div>
              </section>

              {/* Challenges */}
              {projectWithCategory.challenges &&
                projectWithCategory.challenges.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Challenges
                    </h2>
                    <ul className="space-y-3">
                      {projectWithCategory.challenges.map(
                        (challenge, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{challenge}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </section>
                )}

              {/* Solutions */}
              {projectWithCategory.solutions &&
                projectWithCategory.solutions.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Solutions
                    </h2>
                    <ul className="space-y-3">
                      {projectWithCategory.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

              {/* Impact */}
              {projectWithCategory.impact &&
                projectWithCategory.impact.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Impact & Results
                    </h2>
                    <ul className="space-y-3">
                      {projectWithCategory.impact.map((impact, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

              {/* Lessons Learned */}
              {projectWithCategory.lessons &&
                projectWithCategory.lessons.length > 0 && (
                  <section>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Lessons Learned
                    </h2>
                    <ul className="space-y-3">
                      {projectWithCategory.lessons.map((lesson, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Project Details */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Project Details
                </h3>

                {projectWithCategory.timeline && (
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">Timeline</span>
                    </div>
                    <p className="text-gray-900">
                      {projectWithCategory.timeline}
                    </p>
                  </div>
                )}

                {projectWithCategory.team &&
                  projectWithCategory.team.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-medium">Team</span>
                      </div>
                      <p className="text-gray-900">
                        {projectWithCategory.team.join(", ")}
                      </p>
                    </div>
                  )}

                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Code className="w-4 h-4" />
                    <span className="text-sm font-medium">Role</span>
                  </div>
                  <p className="text-gray-900">{projectWithCategory.role}</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Links
                  </h3>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {projectWithCategory.category === "initiative"
                          ? "Learn More"
                          : "Live Demo"}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  console.log("Generated slugs for static paths:", slugs);
  return slugs.map((slug) => ({
    slug,
  }));
}
