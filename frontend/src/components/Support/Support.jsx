import React from "react";
import { FiMail, FiPhone, FiMessageSquare, FiHelpCircle } from "react-icons/fi";

const Support = () => {
  const supportOptions = [
    {
      icon: <FiMessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      desc: "Instantly connect with our support team 24/7.",
      link: "#",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: "Call Us",
      desc: "+91 98765 43210 (Mon–Sat, 9am–7pm)",
      link: "tel:+919876543210",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: "Email Support",
      desc: "support@yourcompany.com",
      link: "mailto:support@yourcompany.com",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FiHelpCircle className="w-6 h-6" />,
      title: "FAQs",
      desc: "Find quick answers to common queries.",
      link: "/faq",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#F8FAFC] to-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0B1F3A] mb-4">
            We’re Here to Help
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated support team is always ready to assist you. 
            Choose the best way to connect with us.
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportOptions.map((option, i) => (
            <a
              key={i}
              href={option.link}
              className="group p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl text-white bg-gradient-to-r ${option.color} mb-4 group-hover:scale-110 transition-transform`}
              >
                {option.icon}
              </div>
              <h3 className="font-semibold text-lg text-[#0B1F3A] mb-2">
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {option.desc}
              </p>
            </a>
          ))}
        </div>

        {/* Contact Box */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-10 text-center border border-gray-200">
          <h3 className="text-2xl font-bold text-[#0B1F3A] mb-4">
            Still need help?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team typically replies within <span className="font-medium">2 hours</span>.
          </p>
          <a
            href="mailto:support@yourcompany.com"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default Support;
