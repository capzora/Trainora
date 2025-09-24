import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import LeadCaptureModal from "../../forms/LeadForm/LeadForm";

const ProgramOverview = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-[#F8FAFF] via-[#F3F4F6] to-[#EEF2FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="relative">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Program Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {data.description}
          </p>

          {/* Key Highlights */}
          {data.highlights && (
            <ul className="space-y-4">
              {data.highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start space-x-3 text-gray-800 group"
                >
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* CTA */}
          <div className="mt-10">
            <a
               onClick={() => setOpen(true)}
              className="inline-block cursor-pointer px-8 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300"
            >
              Download Brochure 
            </a>
          </div>
        </div>

        {/* Right Image */}
        {data.image && (
          <div className="relative flex justify-center">
            <div className="relative group">
              <img
                src={data.image}
                alt="Program Overview"
                className="rounded-2xl shadow-2xl w-[90%] md:w-[85%] transform group-hover:rotate-1 group-hover:scale-105 transition-all duration-500"
              />
              {/* Glow Effect */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
          </div>
        )}
      </div>
      <LeadCaptureModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default ProgramOverview;
