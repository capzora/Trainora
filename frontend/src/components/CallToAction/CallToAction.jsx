import React from "react";
import { Phone } from "lucide-react";

const CallSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1F3A] leading-snug">
            Need Help? <br /> Talk to Our Experts Today!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get in touch with us for guidance, support, and career consultation.
          </p>
        </div>

        {/* Right CTA */}
        <div className="flex flex-col items-center md:items-end">
          <a
            href="tel:+911234567890"
            className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold overflow-hidden rounded-full transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-lg"
          >
            {/* Animated pulse ring around icon */}
            <span className="absolute left-4 flex items-center justify-center">
              <span className="absolute w-10 h-10 rounded-full bg-white/30 animate-ping"></span>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                <Phone className="w-5 h-5 text-white" />
              </span>
            </span>

            {/* Text */}
            <span className="relative z-10 ml-12">Call Now</span>
          </a>
         <p className="mt-3 text-sm text-gray-500 md:text-right">
  <Phone className="inline w-4 h-4 text-green-600 mr-1" />
  Available Mon–Sat, 9am–7pm
</p>

        </div>
      </div>
    </section>
  );
};

export default CallSection;
