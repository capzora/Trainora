import React, { useState, useEffect } from 'react';
import AuthModal from '../../auth/AuthModal/AuthModal';
// import { useAuth } from "../../auth/Authcontext/Authcontext";
import {
  FiMenu,
  FiX,
  FiUser,
  FiLogIn,
  FiDatabase,
  FiBarChart,
  FiCode,
  FiServer,
  FiSettings,
  FiPenTool,
  FiUsers,
  FiGift,
  FiTrendingUp,
  FiHeadphones,
  FiStar,
  FiArrowRight
} from 'react-icons/fi';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authView, setAuthView] = useState("login");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authOpen, setAuthOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      name: 'Data Science with AI',
      description: 'Master AI-powered data analysis',
      icon: <FiDatabase className="w-6 h-6" />,
      link: '/data-science-ai',
      badge: 'Most Popular',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Data Analytics',
      description: 'Transform data into insights',
      icon: <FiBarChart className="w-6 h-6" />,
      link: '/data-analytics',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'MERN Stack Developer',
      description: 'Full-stack web development',
      icon: <FiCode className="w-6 h-6" />,
      link: '/mern-stack',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Java Full Stack Developer',
      description: 'Enterprise-grade applications',
      icon: <FiServer className="w-6 h-6" />,
      link: '/java-full-stack',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'DevOps Engineering',
      description: 'Cloud & infrastructure automation',
      icon: <FiSettings className="w-6 h-6" />,
      link: '/devops-engineering',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'UI/UX Designer',
      description: 'Create stunning user experiences',
      icon: <FiPenTool className="w-6 h-6" />,
      link: '/ui-ux-designer',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const moreItems = [
    {
      name: 'Who We Are',
      description: 'Our story and mission',
      icon: <FiUsers className="w-5 h-5" />,
      link: '/who-we-are'
    },
    {
      name: 'Refer and Earn',
      description: 'Earn rewards by referring friends',
      icon: <FiGift className="w-5 h-5" />,
      link: '/refer-earn',
      badge: 'New'
    },
    {
      name: 'Career Outcomes',
      description: 'Success stories and placements',
      icon: <FiTrendingUp className="w-5 h-5" />,
      link: '/career-outcomes'
    },
    {
      name: 'Support',
      description: '24/7 customer support',
      icon: <FiHeadphones className="w-5 h-5" />,
      link: '/support'
    }
  ];
  //const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B1F3A] shadow-lg border-b border-gray-800'
            : 'bg-[#0B1F3A]'
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <div className="flex flex-col">
                <a
                  href="/"
                  className="text-2xl font-bold text-white hover:text-blue-400 transition-all duration-300"
                >
                  Trainora.ai
                </a>
                <span className="text-xs text-gray-300 font-medium tracking-wide">
                  AI-Powered Learning
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center justify-center space-x-1 flex-1">
              {['Home', 'About'].map((item, idx) => (
                <a
                  key={idx}
                  href={`/${item.toLowerCase()}`}
                  className="px-5 py-3 text-white hover:text-blue-400 font-semibold transition-all duration-300 rounded-xl hover:bg-[#11294E] relative group"
                >
                  {item}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
                </a>
              ))}

              {/* Programs Mega Menu */}
            <div className="relative group">
  {/* Trigger Button */}
  <button className="px-5 py-3 text-white hover:text-blue-400 font-semibold transition-all duration-300 rounded-xl hover:bg-[#11294E] relative">
    Programs
    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
  </button>

  {/* Invisible bridge (to remove gap problem) */}
  <div className="absolute top-full left-0 w-full h-4 bg-transparent"></div>

  {/* Dropdown */}
  <div
    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[900px] 
               bg-white text-[#0B1F3A] rounded-3xl shadow-2xl 
               border border-gray-200 p-8
               opacity-0 translate-y-3 
               group-hover:opacity-100 group-hover:translate-y-0 
               pointer-events-none group-hover:pointer-events-auto
               transition-all duration-300 ease-out z-50"
  >
    <div className="flex justify-between items-center mb-8">
      <div>
        <h3 className="text-2xl font-bold mb-2">Choose Your Career Path</h3>
        <p className="text-gray-600">
          Transform your future with industry-leading programs
        </p>
      </div>
      <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
        <FiStar className="w-4 h-4 mr-2" />
        4.9/5 Rated Programs
      </div>
    </div>

    {/* Programs Grid */}
    <div className="grid grid-cols-3 gap-6">
      {programs.map((program, index) => (
        <a
          key={index}
          href={program.link}
          className="group relative p-6 rounded-2xl border border-gray-200 
                     hover:border-gray-300 transition-all duration-500 
                     hover:shadow-xl hover:-translate-y-2 
                     bg-gradient-to-br from-white to-gray-50 overflow-hidden"
        >
          {program.badge && (
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg transform rotate-12">
              {program.badge}
            </div>
          )}
          <div className="flex flex-col items-center text-center space-y-4">
            <div
              className={`p-4 rounded-2xl bg-gradient-to-r ${program.color} text-white shadow-xl group-hover:scale-110 transition-all duration-500`}
            >
              {program.icon}
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-[#0B1F3A] group-hover:text-blue-600 transition-colors duration-300 text-lg leading-tight">
                {program.name}
              </h4>
              <p className="text-sm text-gray-600">{program.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</div>


              {/* More Dropdown */}
            <div className="relative group">
  {/* Button */}
  <button className="px-5 py-3 text-white hover:text-blue-400 font-semibold transition-all duration-300 rounded-xl hover:bg-[#11294E] relative">
    More
    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
  </button>

  {/* Invisible Bridge */}
  <div className="absolute top-full right-0 w-96 h-6"></div>

  {/* Dropdown */}
  <div className="absolute top-[calc(100%+1.5rem)] right-0 w-96 bg-white text-[#0B1F3A] rounded-2xl shadow-2xl border border-gray-200 p-6 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
    <div className="space-y-2">
      {moreItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
        >
          <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
            {item.icon}
          </div>
          <div className="flex-1">
            <div className="font-semibold">{item.name}</div>
            <div className="text-sm text-gray-600">{item.description}</div>
          </div>
          <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
        </a>
      ))}
    </div>
  </div>
</div>

              <a
                href="/contact"
                className="px-5 py-3 text-white hover:text-blue-400 font-semibold transition-all duration-300 rounded-xl hover:bg-[#11294E] relative group"
              >
                Contact
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <a
                onClick={() => {
              setAuthView("login");
              setIsModalOpen(true);
            }}
                className="flex items-center space-x-2 px-6 py-3 text-[#0B1F3A] bg-white rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold"
              >
                <FiLogIn className="w-4 h-4" />
                <span>Login</span>
              </a>
              <a
                onClick={() => {
              setAuthView("signup");
              setIsModalOpen(true);
            }}
                className="flex items-center space-x-2 px-6 py-3 text-[#0B1F3A] bg-white rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold"
              >
                <FiUser className="w-4 h-4" />
                <span>Sign Up</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 text-white hover:text-blue-400 rounded-xl transition-all duration-300"
              >
                {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-[#0B1F3A] border-t border-gray-800">
            <div className="px-6 py-8 max-h-[80vh] overflow-y-auto">
              <div className="space-y-8 text-white">
                <a href="/" className="block py-3">Home</a>
                <a href="/about" className="block py-3">About</a>
                <a href="/contact" className="block py-3">Contact</a>

                {/* Programs */}
                <div>
                  <h3 className="font-bold mb-3">Programs</h3>
                  <div className="space-y-3">
                    {programs.map((program, index) => (
                      <a key={index} href={program.link} className="block text-gray-300 hover:text-white">
                        {program.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* More */}
                <div>
                  <h3 className="font-bold mb-3">More</h3>
                  <div className="space-y-3">
                    {moreItems.map((item, index) => (
                      <a key={index} href={item.link} className="block text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Auth */}
                <div className="pt-6 border-t border-gray-700 space-y-4">
                  <a
                    onClick={() => {
              setAuthView("login");
              setIsModalOpen(true);
            }}
                    className="flex items-center justify-center w-full px-6 py-4 bg-white text-[#0B1F3A] rounded-xl hover:bg-gray-200"
                  >
                    <FiLogIn className="w-5 h-5 mr-2" />
                    Login
                  </a>
                  <a
                    onClick={() => {
              setAuthView("signup");
              setIsModalOpen(true);
            }}
                    className="flex items-center justify-center w-full px-6 py-4 bg-white text-[#0B1F3A] rounded-xl hover:bg-gray-200"
                  >
                    <FiUser className="w-5 h-5 mr-2" />
                    Sign Up 
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        )}

        {/* Auth Modal */}

      </nav>
       <AuthModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialView={authView} // 👈 pass karenge login/signup select karne ke liye
      />
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
