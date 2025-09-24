import React from "react";
import { BookOpen, Download, CreditCard, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: <BookOpen className="w-12 h-12 text-blue-500" />,
    title: "Choose a Program",
    desc: "Select the training program that best fits your career goals.",
  },
  {
    icon: <Download className="w-12 h-12 text-green-500" />,
    title: "Download Curriculum",
    desc: "Get a detailed curriculum and explore what you’ll learn.",
  },
  {
    icon: <CreditCard className="w-12 h-12 text-purple-500" />,
    title: "Enroll with Easy Payment",
    desc: "Secure your spot with simple and flexible EMI options.",
  },
  {
    icon: <PlayCircle className="w-12 h-12 text-red-500" />,
    title: "Start Live Classes",
    desc: "Begin your journey with live & recorded interactive sessions.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">
          How <span className="text-blue-500">It Works</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Follow these simple steps to kickstart your learning journey with Trainora.ai.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition relative"
            >
              {/* Step Number */}
              <span className="absolute -top-4 left-4 bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                {index + 1}
              </span>

              {step.icon}
              <h3 className="mt-6 text-lg font-semibold text-gray-800">{step.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
