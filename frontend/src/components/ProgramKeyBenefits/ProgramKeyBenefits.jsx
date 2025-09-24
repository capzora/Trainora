import React from "react";
import { CheckCircle2 } from "lucide-react";

const KeyBenefits = ({ data }) => {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Key Benefits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gain exclusive advantages that will accelerate your career growth
            and boost your professional journey.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((benefit, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600" />
                </div>

                {/* Text */}
                <p className="text-gray-800 font-medium leading-relaxed">
                  {benefit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
