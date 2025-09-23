import React from "react";
import { FiUserPlus, FiMail, FiGift } from "react-icons/fi";

const steps = [
  {
    icon: <FiUserPlus className="w-8 h-8 text-blue-600" />,
    title: "Invite Your Friends",
    desc: "Share your referral link with friends & colleagues.",
  },
  {
    icon: <FiMail className="w-8 h-8 text-blue-600" />,
    title: "They Join",
    desc: "Your friends sign up and complete their first step.",
  },
  {
    icon: <FiGift className="w-8 h-8 text-blue-600" />,
    title: "Earn Rewards",
    desc: "Get exciting rewards for every successful referral.",
  },
];

const HowReferWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-12">
          How Referral Works?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowReferWorks;
