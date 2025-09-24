import React from "react";
import { CreditCard, Wallet, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ ye import add karo

const FeeStructure = ({ data, courseId }) => {
  const navigate = useNavigate(); // ✅ hook use karo

  const handleEnrollClick = () => {
    navigate(`/payment/${courseId}`); // ✅ ab correct id navigate hogi
  };

  return (
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Fee Structure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Flexible payment options designed to make learning accessible for everyone.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {data.planName || "Complete Program Fee"}
          </h3>

          <p className="text-5xl font-extrabold text-indigo-700 mb-4">
            ₹{data.amount.toLocaleString()} {/* ✅ number ko readable format me dikhaya */}
          </p>
          <p className="text-gray-600 mb-6">One-time payment for full access</p>

         

          {/* Highlights */}
          <ul className="text-gray-700 space-y-3 mb-8 text-left max-w-md mx-auto">
            {data.highlights?.map((point, i) => (
              <li key={i} className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                {point}
              </li>
            ))}
          </ul>

          {/* Enroll Button */}
          <button
            onClick={handleEnrollClick}
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;
