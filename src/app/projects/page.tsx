"use client";

import Head from "next/head";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  Award,
  Users,
  Code,
  Briefcase,
  ArrowLeft,
  Filter,
} from "lucide-react";
import { useState } from "react";
import projectsData from "@/data/projects";
import Project from "@/types/projects";

interface AllProjectsProps {
  projects: Project[];
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

export default function AllProjects({
  projects = projectsData,
}: AllProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: "All Projects", icon: "🎯" },
    { value: "work", label: "Professional", icon: "💼" },
    { value: "initiative", label: "Initiatives", icon: "🤝" },
    { value: "personal", label: "Personal", icon: "🏆" },
    { value: "open-source", label: "Open Source", icon: "💻" },
  ];

  // Ensure projects is always an array
  const safeProjects = Array.isArray(projects) ? projects : [];

  const filteredProjects =
    selectedCategory === "all"
      ? safeProjects
      : safeProjects.filter((project) => project.type === selectedCategory);

  const projectsByCategory = {
    work: safeProjects.filter((project) => project.type === "work"),
    initiative: safeProjects.filter((project) => project.type === "initiative"),
    personal: safeProjects.filter((project) => project.type === "personal"),
    "open-source": safeProjects.filter(
      (project) => project.type === "open-source"
    ),
  };

  return (
    <>
      <Head>
        <title>All Projects - Bobbylee Ingalls</title>
        <meta
          name="description"
          content="Complete portfolio of professional projects, community initiatives, and personal work by Bobbylee Ingalls"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://bobbyleeingalls.dev/projects" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center gap-4 mb-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Portfolio
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              All Projects
            </h1>
            <p className="text-xl text-gray-600">
              A comprehensive view of my professional work, community
              initiatives, and personal projects
            </p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-blue-600">
                {projectsByCategory.work.length}
              </div>
              <div className="text-sm text-gray-600">Professional</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-green-600">
                {projectsByCategory.initiative.length}
              </div>
              <div className="text-sm text-gray-600">Initiatives</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-orange-600">
                {projectsByCategory.personal.length}
              </div>
              <div className="text-sm text-gray-600">Personal</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-2xl font-bold text-purple-600">
                {projectsByCategory["open-source"].length}
              </div>
              <div className="text-sm text-gray-600">Open Source</div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">
                Filter by Category
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  aria-pressed={selectedCategory === category.value}
                >
                  <span>{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const category = project.type;
              const slug = createSlug(project.title);

              return (
                <article
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={
                        project.image || "/placeholder.svg?height=200&width=400"
                      }
                      alt={`${project.title} project screenshot`}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    {/* Category Badge */}
                    <div
                      className={`absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                        category
                      )}`}
                    >
                      {getCategoryIcon(category)}
                      {getCategoryLabel(category)}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {(project.technologies || [])
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      {(project.technologies || []).length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{(project.technologies || []).length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href={`/projects/${slug}`}
                        className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        View Details
                      </Link>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                          aria-label={`View live demo of ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                          aria-label={`View source code for ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Code className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No projects found
              </h3>
              <p className="text-gray-600">
                Try selecting a different category filter.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
