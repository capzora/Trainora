import React from "react";

const ReferralForm = () => {
  return (
    <section id="referral-form" className="py-16 bg-gray-50">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-[#0B1F3A] mb-6 text-center">
          Referral Form
        </h2>
        <form className="space-y-5">
          {/* Your Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Your Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Friend Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Friend’s Email
            </label>
            <input
              type="email"
              placeholder="friend@example.com"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Submit Referral
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReferralForm;
