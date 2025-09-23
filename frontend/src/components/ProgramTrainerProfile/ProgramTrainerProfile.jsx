import React from "react";
import { Linkedin, Mail, Star } from "lucide-react";

const TrainerProfile = ({ data }) => {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Meet Your Trainer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from an industry expert with years of real-world experience
            and a passion for teaching.
          </p>
        </div>

        {/* Moving Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-trainer gap-10">
            {[...Array(2)].map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 min-w-[500px]"
              >
                {/* Trainer Image */}
                {data.image && (
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-36 h-36 rounded-full object-cover shadow-md border-4 border-white"
                  />
                )}

                {/* Trainer Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {data.name}
                  </h3>
                  <p className="text-indigo-600 font-medium mb-2">
                    {data.designation}
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {data.exp}
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center md:justify-start gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center md:justify-start gap-4">
                    {data.linkedin && (
                      <a
                        href={data.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-indigo-100 rounded-full hover:bg-indigo-200 transition"
                      >
                        <Linkedin className="w-6 h-6 text-indigo-700" />
                      </a>
                    )}
                    {data.email && (
                      <a
                        href={`mailto:${data.email}`}
                        className="p-2 bg-indigo-100 rounded-full hover:bg-indigo-200 transition"
                      >
                        <Mail className="w-6 h-6 text-indigo-700" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes trainerScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-trainer {
          width: max-content;
          animation: trainerScroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrainerProfile;
