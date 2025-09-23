import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "IT", value: 40 },
  { name: "Finance", value: 25 },
  { name: "Healthcare", value: 20 },
  { name: "Education", value: 15 },
];

const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444"];

const SectorWiseDistribution = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0B1F3A] mb-8">
          Sector-Wise Distribution
        </h2>
        <div className="w-full max-w-3xl h-80 mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default SectorWiseDistribution;
