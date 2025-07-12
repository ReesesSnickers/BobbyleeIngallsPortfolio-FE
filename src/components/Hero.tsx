import type Hero from "@/types/hero";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  data: Hero;
}

export default function Hero({ data }: HeroProps) {
  // Provide defaults for any missing data
  const heroData = {
    name: data?.name || "Developer",
    tagline: data?.tagline || "Full Stack Developer",
    description: data?.description || "Welcome to my portfolio",
    avatar: data?.avatar,
    resumeUrl: data?.resumeUrl,
    social: data?.social || {},
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-80 h-80 rounded-full mx-auto mb-6 border-4 border-white shadow-lg overflow-hidden">
            <Image
              src={heroData.avatar || "/placeholder.svg"}
              alt={heroData.name}
              height={600}
              width={600}
              loading="lazy"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            {heroData.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            {heroData.tagline}
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            {heroData.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {heroData.social.github && (
            <a
              href={heroData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          )}
          {heroData.social.linkedin && (
            <a
              href={heroData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          )}
          {heroData.social.email && (
            <a
              href={`mailto:${heroData.social.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          )}
          {heroData.resumeUrl && (
            <a
              href={heroData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
