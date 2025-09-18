import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, User, Phone, LogIn, UserPlus } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isMobileProgramOpen, setIsMobileProgramOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);

  const programDropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);

  const programs = [
    "Data Science with AI",
    "Data Analytics",
    "MERN Stack",
    "Java Full Stack",
    "DevOps Engineering",
    "Data Structure and Algorithm",
    "UI/UX Design"
  ];

  const moreItems = ["Internship", "Refer and Earn", "Who We Are", "Services"];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (programDropdownRef.current && !programDropdownRef.current.contains(event.target)) {
        setIsProgramDropdownOpen(false);
      }
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setIsMoreDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="hidden sm:block text-xl font-bold text-gray-900">BrandName</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              About
            </a>

            {/* Programs Dropdown */}
            <div className="relative" ref={programDropdownRef}>
              <button
                onClick={() => setIsProgramDropdownOpen(!isProgramDropdownOpen)}
                onMouseEnter={() => setIsProgramDropdownOpen(true)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                <span>Programs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isProgramDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProgramDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  onMouseLeave={() => setIsProgramDropdownOpen(false)}
                >
                  {programs.map((program) => (
                    <a
                      key={program}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      {program}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* More Dropdown */}
            <div className="relative" ref={moreDropdownRef}>
              <button
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                onMouseEnter={() => setIsMoreDropdownOpen(true)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                <span>More</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMoreDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMoreDropdownOpen && (
                <div
                  className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
                  onMouseLeave={() => setIsMoreDropdownOpen(false)}
                >
                  {moreItems.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#login"
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blue-600 border border-gray-300 rounded-lg hover:border-blue-300 transition-all duration-200"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </a>
            <a
              href="#signup"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="px-4 py-2 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
            >
              About
            </a>

            {/* Mobile Programs */}
            <div>
              <button
                onClick={() => setIsMobileProgramOpen(!isMobileProgramOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
              >
                <span>Programs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileProgramOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileProgramOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {programs.map((program) => (
                    <a
                      key={program}
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                    >
                      {program}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile More */}
            <div>
              <button
                onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
              >
                <span>More</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileMoreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isMobileMoreOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {moreItems.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </a>

            {/* Mobile Auth Buttons */}
            <div className="pt-3 space-y-2 border-t border-gray-200 mt-3">
              <a
                href="#login"
                className="flex items-center justify-center space-x-2 w-full px-3 py-2 text-gray-700 hover:text-blue-600 border border-gray-300 rounded-lg hover:border-blue-300 transition-all duration-200"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </a>
              <a
                href="#signup"
                className="flex items-center justify-center space-x-2 w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign Up</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
