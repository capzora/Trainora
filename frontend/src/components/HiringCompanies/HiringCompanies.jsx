import React from "react";

const companies = [
  "/logos/google.png",
  "/logos/microsoft.png",
  "/logos/amazon.png",
  "/logos/ibm.png",
  "/logos/accenture.png",
  "/logos/tcs.png",
  "/logos/infosys.png",
  "/logos/meta.png",
];

const HiringCompanies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-12">
          Our Learners Work With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {companies.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <img src={logo} alt="Company Logo" className="h-10 grayscale hover:grayscale-0 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringCompanies;
