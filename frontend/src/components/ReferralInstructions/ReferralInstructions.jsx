import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const ReferralInstructions = () => {
  const instructions = [
    {
      title: "Unlimited Referrals",
      desc: "There’s no limit! Invite as many friends as you want and keep earning rewards.",
    },
    {
      title: "Successful Join Required",
      desc: "Rewards are credited once your friend completes their first successful enrollment.",
    },
    {
      title: "Valid Email ID",
      desc: "Make sure your friend signs up with the same email ID you shared in the referral form.",
    },
    {
      title: "Fair Usage Policy",
      desc: "Fraudulent or fake referrals will be disqualified as per program policy.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0B1F3A]">
            Referral Program Guidelines
          </h2>
          <p className="text-gray-600 mt-3">
            Please review these simple rules to ensure smooth participation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {instructions.map((rule, i) => (
            <div
              key={i}
              className="flex items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <div className="flex-shrink-0 mr-4">
                <FiCheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0B1F3A] mb-1">
                  {rule.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferralInstructions;
