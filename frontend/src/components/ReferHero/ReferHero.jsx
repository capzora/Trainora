import React from "react";
import { FiUsers } from "react-icons/fi";

const ReferHero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex justify-center mb-6">
          <FiUsers className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Refer & Earn Rewards 🎁</h1>
        <p className="text-lg text-blue-100 mb-6">
          Invite your friends to join us and earn exclusive benefits for every
          successful referral.
        </p>
        <a
          href="#referral-form"
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Refer Now
        </a>
      </div>
    </section>
  );
};

export default ReferHero;
