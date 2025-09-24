import React from "react";
import { Briefcase, PlayCircle, GraduationCap, Wallet, Award, Laptop } from "lucide-react";

const features = [
  { icon: <Briefcase className="w-10 h-10 text-blue-500" />, title: "Industry Mentors" },
  { icon: <PlayCircle className="w-10 h-10 text-green-500" />, title: "Live + Recorded Classes" },
  { icon: <GraduationCap className="w-10 h-10 text-purple-500" />, title: "Job & Internship Assistance" },
  { icon: <Wallet className="w-10 h-10 text-yellow-500" />, title: "Affordable EMI Options" },
  { icon: <Award className="w-10 h-10 text-pink-500" />, title: "Certification" },
  { icon: <Laptop className="w-10 h-10 text-red-500" />, title: "Real-World Projects" },
];

const WhyTrainora = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">Why Choose <span className="text-blue-500">Trainora.ai?</span></h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Trainora.ai brings you the best learning experience with real-world exposure and placement support.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
              {item.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrainora;
