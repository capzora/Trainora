import React from "react";
import { User, Mail, Phone } from "lucide-react";

const ApplyForm = () => {

  return (
    <section >
      <div className="max-w-4xl mx-auto px-6">
        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Apply Now
            </h2>
            <p className="text-gray-600 mt-2">
              Fill in your details and our team will connect with you shortly.
            </p>
          </div>

          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition text-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 text-gray-400 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="w-full  text-gray-400 pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
