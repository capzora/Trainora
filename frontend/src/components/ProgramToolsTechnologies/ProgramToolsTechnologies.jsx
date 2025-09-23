import React from "react";
import {
  Wrench,
  Braces,
  Server,
  Boxes,
  Github,
  Cloud,
  Database,
} from "lucide-react";

// Map tool names to icons
const toolIcons = {
  "React.js": (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      alt="React"
      className="w-8 h-8"
    />
  ),
  "Node.js": (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      alt="Node.js"
      className="w-8 h-8"
    />
  ),
  "Express.js": (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
      alt="Express"
      className="w-8 h-8 invert"
    />
  ),
  MongoDB: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      alt="MongoDB"
      className="w-8 h-8"
    />
  ),
  Git: <Github className="w-8 h-8 text-gray-800" />,
  "GitHub": (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      alt="GitHub"
      className="w-8 h-8"
    />
  ),
  Docker: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
      alt="Docker"
      className="w-8 h-8"
    />
  ),
  Postman: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
      alt="Postman"
      className="w-8 h-8"
    />
  ),
  AWS: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
      alt="AWS"
      className="w-8 h-8"
    />
  ),
};

const ToolsTechnologies = ({ data }) => {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Tools & Technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Master the industry-standard tools and technologies that top
            companies use for building real-world solutions.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.map((tool, i) => (
            <div
              key={i}
              className="group bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-xl border border-gray-200 flex flex-col items-center justify-center text-center transition duration-300"
            >
              {/* Icon */}
              <div className="p-4 bg-indigo-100 rounded-full mb-4 group-hover:bg-indigo-200 transition flex items-center justify-center">
                {toolIcons[tool] || <Wrench className="w-8 h-8 text-indigo-600" />}
              </div>

              {/* Tool Name */}
              <h3 className="text-gray-800 font-semibold">{tool}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsTechnologies;
