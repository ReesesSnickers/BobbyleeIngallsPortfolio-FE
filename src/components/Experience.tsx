import type Experience from "@/types/experiences";
import { Calendar, MapPin } from "lucide-react";

interface ExperienceProps {
  experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-start mb-12">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>

              <div className="ml-16 bg-white rounded-lg shadow-md p-6 w-full">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {experience.position}
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      {experience.company}
                    </p>
                  </div>

                  <div className="flex flex-col md:items-end text-sm text-gray-500 mt-2 md:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.startDate} - {experience.endDate || "Present"}
                    </div>
                    {experience.location && (
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-4 h-4" />
                        {experience.location}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{experience.description}</p>

                {experience.achievements &&
                  experience.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  )}

                {experience.technologies &&
                  experience.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
