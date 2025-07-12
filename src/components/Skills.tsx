import type Skills from "@/types/skills";

interface SkillsProps {
  skills: Skills[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white rounded-lg p-3 text-center shadow-sm border border-gray-100"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div className="text-sm font-medium text-gray-900">
                      {skill.name}
                    </div>
                    {skill.level && (
                      <div className="text-xs text-gray-500 mt-1">
                        {skill.level}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
