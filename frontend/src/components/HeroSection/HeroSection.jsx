import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeadCaptureModal from "../../forms/LeadForm/LeadForm";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Scroll function
  const scrollToProgramsOverview = () => {
    const section = document.getElementById("programs-overview");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative text-center md:text-left">
      {/* Background Image */}
      <div className="absolute inset-0 w-full overflow-hidden -z-10">
        <img
          src="/assets/image/heroimage.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute h-full inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-white">
          <h1 className="text-3xl md:text-5xl mt-8 font-heading font-bold leading-snug">
            Learn. Build. Get Hired — 6 Months Industry Integrated Training Programs
          </h1>
          <p className="mt-6 text-gray-200 text-lg font-body max-w-xl">
            Upskill with the latest technology programs designed with real-world
            projects and guaranteed placement assistance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-18 flex flex-wrap gap-4">
            {/* Scroll Button */}
            <button
              onClick={scrollToProgramsOverview}
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-[#60A5FA] transition"
            >
              Explore Programs
            </button>

            {/* Download Brochure Button */}
            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 bg-white text-[#0B1F3A] rounded-lg font-medium hover:bg-[#60A5FA] transition"
            >
              Download Brochure
            </button>

            {/* Enroll Button */}
            <button
              onClick={() => navigate("/datasciencewithai")}
              className="px-6 py-3 bg-[#10B981] text-white rounded-lg font-medium hover:bg-green-600 transition"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <LeadCaptureModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
};

export default HeroSection;
