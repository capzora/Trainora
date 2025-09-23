import React from "react";
import { Gift, Sparkles } from "lucide-react";

const AdditionalBenefits = ({ data }) => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Special Perks
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Additional Benefits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apart from core training, get exclusive advantages to enhance your
            learning journey.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((benefit, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 flex items-start gap-4"
            >
              {/* Icon */}
              <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition">
                <Gift className="w-6 h-6 text-purple-600" />
              </div>

              {/* Text */}
              <p className="text-gray-800 font-medium leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalBenefits;
