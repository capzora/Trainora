import React from "react";
import { motion } from "framer-motion";

const HeroBanner = () => {
  const scrollToMentors = () => {
    const section = document.getElementById("mentors");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-to-r from-[#0B1F3A] via-[#1e3c72] to-[#2a5298] w-full h-full"></div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-10 left-10 w-10 h-10 bg-blue-400 rounded-full opacity-40"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-14 h-14 bg-green-400 rounded-lg opacity-30"
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-8 h-8 bg-yellow-400 rounded-full opacity-40"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Content */}
      <div className="max-w-4xl px-6">
        <h1 className="text-3xl md:text-6xl font-bold leading-snug">
          We are <span className="text-[#3B82F6]">Trainora.ai</span> — Shaping Careers with Industry-Integrated Learning
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200">
          From learners to leaders, we empower students with skills that matter in the digital world.
        </p>

        CTA Buttons
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {/* <button className="px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-medium hover:bg-[#60A5FA] transition">
            Explore Programs
          </button> */}
          <button
            onClick={scrollToMentors}
            className="px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#0B1F3A] transition"
          >
            Meet Our Mentors
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
