// TrainingPrograms.jsx
import React from "react";
import { BookOpen, Code, Cpu, Users } from "lucide-react";

const programs = [
  {
    icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
    title: "Data Science & AI",
    desc: "Master data-driven decision making with AI-powered insights.",
  },
  {
    icon: <Code className="w-8 h-8 text-indigo-600" />,
    title: "Full Stack Development",
    desc: "Build scalable, modern applications from scratch to deployment.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-indigo-600" />,
    title: "DevOps Engineering",
    desc: "Streamline delivery pipelines with industry-grade tools.",
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-600" />,
    title: "UI/UX Design",
    desc: "Design user-centered, intuitive digital experiences.",
  },
];

const TrainingPrograms = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Training Programs
          </h2>
          <p className="text-gray-600 mt-3">
            Industry-relevant courses designed to accelerate your career.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, i) => (
            <div
              key={i}
              className="p-8 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm">{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
