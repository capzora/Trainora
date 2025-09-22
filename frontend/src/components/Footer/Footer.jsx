import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const programs = [
    { name: "Data Science with AI", path: "/datasciencewithai" },
    { name: "Data Analytics", path: "/dataanalytic" },
    { name: "MERN Stack", path: "/mernstack" },
    { name: "Java Full Stack", path: "/javafullstack" },
    { name: "DevOps Engineering", path: "/devops" },
    { name: "UI/UX Design", path: "/uiux" },
  ];

  return (
    <footer className="bg-[#0B1F3A] text-white py-12 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <h2
            className="text-2xl font-heading font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Trainora.ai
          </h2>
          <p className="text-gray-400 mt-4 text-sm font-body">
            Empowering learners with modern skills and professional training
            programs.
          </p>
          <div className="flex gap-4 mt-6 text-gray-400">
            <a href="#" className="hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Programs */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">Programs</h3>
          <ul className="space-y-2 text-gray-400 font-body text-sm">
            {programs.map((program, idx) => (
              <li
                key={idx}
                className="hover:text-white cursor-pointer transition"
                onClick={() => navigate(program.path)}
              >
                {program.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 font-body text-sm">
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/about")}
            >
              About Us
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/internship")}
            >
              Internship
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/refer-earn")}
            >
              Refer & Earn
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/who-we-are")}
            >
              Who We Are
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/services")}
            >
              Services
            </li>
            <li
              className="hover:text-white cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 font-body text-sm">📍 New Delhi, India</p>
          <p className="text-gray-400 font-body text-sm mt-2">
            📧 support@trainora.ai
          </p>
          <p className="text-gray-400 font-body text-sm mt-2">
            📞 +91 98765 43210
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Trainora.ai. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
