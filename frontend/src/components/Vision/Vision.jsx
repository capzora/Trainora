import React from "react";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-green-50 to-white overflow-hidden text-center">
      {/* Decorative abstract shapes */}
      <div className="absolute top-0 left-1/4 w-60 h-60 bg-green-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-40"></div>

      <motion.div
        className="relative max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Icon + Label */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <Eye className="w-12 h-12 text-green-600" />
          <span className="text-green-700 font-semibold tracking-wider uppercase">
            Our Vision
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1F3A] leading-tight mb-6">
          Shaping the <span className="text-green-600">Future</span> with
          Innovation & Trust
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-lg leading-relaxed">
          We envision becoming the most trusted and innovative learning
          ecosystem — where students, professionals, and organizations grow
          together through cutting-edge skills, expert mentorship, and
          future-ready guidance.
        </p>

        {/* Decorative bottom line */}
        <div className="mt-10 w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default VisionSection;
