import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { role: "Software Engineer", salary: 850000 },
  { role: "Data Scientist", salary: 1200000 },
  { role: "Cloud Engineer", salary: 950000 },
  { role: "AI/ML Engineer", salary: 1350000 },
  { role: "Cybersecurity", salary: 1100000 },
];

const SalaryInsightsGraph = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8 text-center">
          Salary Insights by Role
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="role" />
            <YAxis tickFormatter={(v) => `₹${(v / 100000).toFixed(1)}L`} />
            <Tooltip formatter={(v) => `₹${v.toLocaleString()}`} />
            <Bar dataKey="salary" fill="#2563EB" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default SalaryInsightsGraph;
