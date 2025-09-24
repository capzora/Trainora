import React from "react";
import { CheckCircle2 } from "lucide-react";

const outcomes = [
  {
    title: "Hands-on Experience",
    description:
      "Work on real-world projects designed with industry mentors to gain practical, job-ready skills.",
  },
  {
    title: "Placement Assistance",
    description:
      "Dedicated career support including interview prep, resume building, and guaranteed placement assistance.",
  },
  {
    title: "Expert Mentorship",
    description:
      "Get guided by industry professionals and senior trainers throughout your learning journey.",
  },
  {
    title: "In-Demand Skills",
    description:
      "Master tools and technologies that companies are actively hiring for today.",
  },
  {
    title: "Certification",
    description:
      "Earn a recognized certification to boost your career credibility and showcase your skills.",
  },
  {
    title: "Career Growth",
    description:
      "Accelerate your career with opportunities in top organizations across industries.",
  },
];

const Outcomes = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
            Program{" "}
            <span className="bg-blue-500 text-transparent bg-clip-text">
              Outcomes
            </span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Unlock career opportunities and practical knowledge with our
            industry-integrated training programs.
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-400 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#0B1F3A]">
                {outcome.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
