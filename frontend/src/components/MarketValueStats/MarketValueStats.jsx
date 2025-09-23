import React from "react";

const MarketValueStats = () => {
  const stats = [
    { number: "2.3M+", label: "Tech Jobs in Demand" },
    { number: "35%", label: "Avg. Salary Growth" },
    { number: "120+", label: "Countries Hiring" },
    { number: "500+", label: "Industry Partners" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B1F3A]">
            Market Value Snapshot
          </h2>
          <p className="text-gray-600 mt-3">
            Stay ahead with the latest insights into global workforce trends.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-3xl font-bold text-blue-600">{stat.number}</h3>
              <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketValueStats;
