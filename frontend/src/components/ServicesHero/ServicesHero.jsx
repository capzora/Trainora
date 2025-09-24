// ServicesHero.jsx
import React from "react";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="relative w-full py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6"
        >
          Transforming Learning with{" "}
          <span className="text-yellow-300">Next-Gen Solutions</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg max-w-2xl mx-auto text-gray-200"
        >
          From professional training to cutting-edge EdTech solutions, we help
          learners and organizations achieve their goals faster and smarter.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesHero;
