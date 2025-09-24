import React from "react";
import { BookOpen } from "lucide-react";

const SyllabusOverview = ({ data }) => {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Syllabus Overview
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A structured learning journey designed to take you from fundamentals
            to advanced concepts step by step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-indigo-600 ml-6 space-y-10">
          {data.map((module, i) => (
            <div key={i} className="ml-6 relative">
              {/* Dot */}
              <span className="absolute -left-[38px] top-2 w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold">
                {i + 1}
              </span>

              {/* Card */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="text-indigo-600 w-6 h-6" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Module {i + 1}
                  </h3>
                </div>
                <p className="text-gray-700">{module}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SyllabusOverview;
