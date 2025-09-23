// EdTechSolutions.jsx
import React from "react";
import { Brain, Cloud, ChartBar, GraduationCap } from "lucide-react";

const solutions = [
  {
    icon: <Brain className="w-10 h-10 text-purple-600" />,
    title: "AI-Powered Learning",
    desc: "Personalized paths and smart recommendations for every learner.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-purple-600" />,
    title: "Cloud-Based LMS",
    desc: "Seamless, scalable, and secure training delivery platforms.",
  },
  {
    icon: <ChartBar className="w-10 h-10 text-purple-600" />,
    title: "Analytics & Insights",
    desc: "Real-time performance tracking with actionable insights.",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-purple-600" />,
    title: "Corporate Upskilling",
    desc: "Enterprise-ready programs for future-proof teams.",
  },
];

const EdTechSolutions = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Innovative EdTech Solutions
          </h2>
          <p className="text-gray-600 mt-3">
            We deliver powerful technology to redefine the learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((sol, i) => (
            <div
              key={i}
              className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-5">{sol.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {sol.title}
              </h3>
              <p className="text-gray-600 text-sm">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EdTechSolutions;
