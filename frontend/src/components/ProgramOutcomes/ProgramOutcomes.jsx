import React from "react";
import { CheckCircle } from "lucide-react";

const ProgramOutcomes = ({ data }) => {
  return (
    <section className="relative w-full py-24 bg-gray-50 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Program Outcomes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            By the end of this program, you’ll gain not just skills, but also
            the confidence to apply them in real-world scenarios.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((outcome, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 bg-green-50 rounded-full group-hover:bg-green-100 transition">
                  <CheckCircle className="text-green-600 w-7 h-7" />
                </div>

                {/* Text */}
                <p className="text-gray-800 font-medium leading-relaxed">
                  {outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramOutcomes;
