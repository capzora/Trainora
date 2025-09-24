import React from "react";

const HiringPartners = ({ data }) => {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Hiring Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learners from our programs have been placed in top companies across the globe.
          </p>
        </div>

        {/* Moving Logos */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-10">
            {data.concat(data).map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-40 h-20 bg-gray-50 rounded-xl shadow-sm border border-gray-100"
              >
                <img
                  src={logo}
                  alt={`Hiring Partner ${i + 1}`}
                  className="max-h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

       
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          width: max-content;
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HiringPartners;
