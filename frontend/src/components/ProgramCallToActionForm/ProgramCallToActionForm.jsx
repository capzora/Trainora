import React, { useState } from "react";
import { X } from "lucide-react";
import ApplyForm from "../../forms/CallToActionForm/CallToActionForm"; // import your form

const CallToActionForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-indigo-100 mb-8">
          Take the first step toward your dream career.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          Apply Now
        </button>
      </div>

      {/* Modal Wrapper */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xl">
          <div className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-2xl relative animate-scaleIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Application Form */}
            <ApplyForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default CallToActionForm;
