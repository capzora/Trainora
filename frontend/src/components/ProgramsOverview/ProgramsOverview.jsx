import React from "react";
import { useNavigate } from "react-router-dom";

const programs = [
  {
    title: "Data Science with AI",
    duration: "6 Months",
    image: "/assets/image/datascience.png",
    path: "/data-science-ai",
  },
  {
    title: "Data Analytics",
    duration: "5 Months",
    image: "/assets/image/dataanalytics.png",
    path: "/data-analytics",
  },
  {
    title: "MERN Stack",
    duration: "6 Months",
    image: "/assets/image/mernstack.png",
    path: "/mern-stack",
  },
  {
    title: "Java Full Stack",
    duration: "6 Months",
    image: "/assets/image/javafullstack.png",
    path: "/java-full-stack",
  },
  {
    title: "DevOps Engineering",
    duration: "4 Months",
    image: "/assets/image/devops.png",
    path: "/devops-engineering",
  },
  {
    title: "UI/UX Design",
    duration: "3 Months",
    image: "/assets/image/uiux.png",
    path: "/ui-ux-designer",
  },
];

const ProgramsOverview = () => {
  const navigate = useNavigate();

  return (
    <section id ="programs-overview" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
          Programs <span className="text-blue-500">Overview</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore our top-notch training programs designed to prepare you for
          the real industry challenges.
        </p>

        {/* Program Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              onClick={() => navigate(program.path)} // ✅ पूरा card clickable
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Image */}
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-xl font-semibold">{program.title}</h3>
                <p className="mt-2">{program.duration}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // card click block nahi kare
                    navigate(program.path);
                  }}
                  className="mt-4 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverview;
