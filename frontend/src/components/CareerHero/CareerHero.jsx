import React from "react";
import { FiTrendingUp } from "react-icons/fi";

const CareerHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0B1F3A] to-[#11294E] text-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Build a Career That Shapes the Future
        </h1>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
          Gain industry-relevant skills, explore market trends, and unlock opportunities
          with top recruiters across the globe.
        </p>
        <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold shadow-md transition inline-flex items-center">
          Explore Programs <FiTrendingUp className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default CareerHero;
