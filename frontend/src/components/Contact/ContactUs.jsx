import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight text-[#0B1F3A] mb-6">
            Let’s Connect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you have a question, feedback, or a business inquiry — we’re here to help. 
            Reach out to us, and our team will respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Contact Details */}
          <div className="space-y-10">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner">
                <FiMail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B1F3A]">Email</h3>
                <p className="text-gray-600 mt-2">support@yourcompany.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-green-50 text-green-600 shadow-inner">
                <FiPhone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B1F3A]">Phone</h3>
                <p className="text-gray-600 mt-2">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-red-50 text-red-600 shadow-inner">
                <FiMapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0B1F3A]">Address</h3>
                <p className="text-gray-600 mt-2">
                  123 Corporate Avenue, Tech City, India
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609716666!2d72.74109970904066!3d19.082197839415567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f12d6f1f5%3A0xdeb62f52f4a1512a!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695579876543!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-10 border border-gray-100">
            <h3 className="text-3xl font-bold text-[#0B1F3A] mb-8">
              Send us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-3 border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-5 py-3 border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-5 py-3 border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white text-lg font-semibold rounded-2xl shadow-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
