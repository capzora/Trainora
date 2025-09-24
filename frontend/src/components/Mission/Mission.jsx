import React from "react";
import { Target } from "lucide-react";
import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden text-center">
      {/* Decorative abstract shapes */}
      <div className="absolute top-0 right-1/4 w-60 h-60 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <motion.div
        className="relative max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Icon + Label */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <Target className="w-12 h-12 text-blue-600" />
          <span className="text-blue-700 font-semibold tracking-wider uppercase">
            Our Mission
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1F3A] leading-tight mb-6">
          Shaping Futures with <span className="text-blue-600">Skills</span> that Matter
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-lg leading-relaxed">
          Our mission is to empower learners with practical, job-ready skills 
          through real-world projects, expert mentorship, and innovative 
          learning programs that unlock global career opportunities.
        </p>

        {/* Decorative bottom line */}
        <div className="mt-10 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default MissionSection;
