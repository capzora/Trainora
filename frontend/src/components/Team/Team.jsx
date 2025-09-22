import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Amit Sharma",
    role: "CEO & Founder",
    image: "/assets/image/team1.jpg",
  },
  {
    name: "Priya Mehta",
    role: "Head of Training",
    image: "/assets/image/team2.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Placement Head",
    image: "/assets/image/team3.jpg",
  },
];

const TeamSection = () => {
  return (
    <section id="mentors"className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-[#0B1F3A]">
          Meet Our <span className="text-blue-600">Team</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Experienced mentors and leaders guiding you at every step.
        </p>

        {/* Team Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-blue-100 shadow-md"
              />
              <h3 className="mt-6 text-xl font-semibold text-[#0B1F3A]">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
