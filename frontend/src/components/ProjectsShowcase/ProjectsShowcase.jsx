import React from "react";
import { Code2 } from "lucide-react";

const ProjectsShowcase = ({ data }) => {
  return (
    <section className="relative w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Projects Showcase
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Build industry-relevant, hands-on projects that strengthen your
            portfolio and demonstrate your expertise.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((project, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative w-full h-48 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
                    <Code2 className="w-10 h-10" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title || `Project ${i + 1}`}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.desc ||
                    "Hands-on project to apply your learnings in real-world scenarios."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
