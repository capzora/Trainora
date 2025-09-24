import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Briefcase, Building2 } from "lucide-react";

const stats = [
  { value: "5000+", label: "Students Trained", icon: Users },
  { value: "95%", label: "Placement Rate", icon: Award },
  { value: "200+", label: "Industry Mentors", icon: Briefcase },
  { value: "50+", label: "Corporate Partners", icon: Building2 },
];

const StatsSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A] inline-block relative">
            Our <span className="text-blue-600">Impact</span>
            {/* Underline */}
            <span className="block w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-3 rounded-full"></span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering measurable results through learning and career transformation
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100 
                           transition-transform transform hover:-translate-y-2 hover:scale-105 
                           hover:shadow-2xl hover:border-blue-200"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="flex justify-center items-center w-14 h-14 mx-auto mb-4 rounded-full bg-blue-50 text-blue-600">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-4xl font-extrabold text-[#0B1F3A]">{stat.value}</h3>
                <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
