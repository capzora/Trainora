import React from "react";
import { motion } from "framer-motion";

const WhoWeAreHero = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-[#0B1F3A] to-[#11294E] text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Who We Are
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200"
        >
          We empower learners with skills, opportunities, and a strong community
          to thrive in today’s competitive world.
        </motion.p>
      </div>
    </section>
  );
};

export default WhoWeAreHero;
