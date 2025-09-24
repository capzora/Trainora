import React from "react";

const logos = [
  "/assets/image/govt1.png",
  "/assets/image/govt2.png",
  "/assets/image/govt3.png",
  "/assets/image/govt4.png",
];

const TrustedByGovt = () => {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F3A]">
          Trusted By{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Government Bodies
          </span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Recognized and supported by leading government initiatives & programs
          that aim to empower education and skill development.
        </p>

        {/* Logos Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105"
            >
              <img
                src={logo}
                alt={`Govt Logo ${idx + 1}`}
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByGovt;
