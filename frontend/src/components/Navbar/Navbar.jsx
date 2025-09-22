import React, { useState, useEffect } from 'react';
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
  FiPlay,
  FiArrowRight
} from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-lg'
      }`}>
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section - Left End */}
            <div className="flex items-center space-x-4 flex-shrink-0">
             
              <div className="flex flex-col">
                <a 
                  href="/" 
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                >
                  Trainora.ai
                </a>
                <span className="text-xs text-gray-500 font-medium tracking-wide">AI-Powered Learning</span>
              </div>
            </div>

            {/* Desktop Menu - Center */}
            <div className="hidden xl:flex items-center justify-center space-x-1 flex-1">
              <a 
                href="/" 
                className="px-5 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 relative group"
              >
                Home
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
              </a>
              
              <a 
                href="/about" 
                className="px-5 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 relative group"
              >
                About
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
              </a>

              {/* Programs Mega Menu */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <button className="px-5 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 relative group">
                  Programs
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
                </button>
                
                {isProgramsOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[900px] bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 p-8 animate-in slide-in-from-top-5 duration-500">
                    <div className="flex justify-between items-center mb-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Career Path</h3>
                        <p className="text-gray-600">Transform your future with industry-leading programs</p>
                      </div>
                      <div className="flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        <FiStar className="w-4 h-4 mr-2" />
                        4.9/5 Rated Programs
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6">
                      {programs.map((program, index) => (
                        <a
                          key={index}
                          href={program.link}
                          className="group relative p-6 rounded-2xl border border-gray-200/50 hover:border-gray-300/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden"
                        >
                          {program.badge && (
                            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg transform rotate-12">
                              {program.badge}
                            </div>
                          )}
                          
                          <div className="flex flex-col items-center text-center space-y-4">
                            <div className={`p-4 rounded-2xl bg-gradient-to-r ${program.color} text-white shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
                              {program.icon}
                            </div>
                            <div className="space-y-2">
                              <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-lg leading-tight">
                                {program.name}
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed">{program.description}</p>
                            </div>
                            <div className="flex items-center text-blue-600 text-sm font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                              Learn More 
                              <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                          </div>
                          
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 rounded-2xl transition-all duration-500"></div>
                        </a>
                      ))}
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-gray-200/50">
                      <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <FiPlay className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900">Not sure which program to choose?</span>
                            <p className="text-sm text-gray-600">Take our AI-powered career assessment</p>
                          </div>
                        </div>
                        <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                          Take Quiz
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* More Dropdown */}
              <div 
                className="relative group"
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                <button className="px-5 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 relative group">
                  More
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
                </button>
                
                {isMoreOpen && (
                  <div className="absolute top-full right-0 mt-4 w-96 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-6 animate-in slide-in-from-top-5 duration-500">
                    <div className="space-y-2">
                      {moreItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.link}
                          className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 relative overflow-hidden"
                        >
                          {item.badge && (
                            <div className="absolute top-2 right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                              {item.badge}
                            </div>
                          )}
                          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-600">{item.description}</div>
                          </div>
                          <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a 
                href="/contact" 
                className="px-5 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 relative group"
              >
                Contact
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-3/4 rounded-full"></span>
              </a>
            </div>

            {/* Auth Buttons - Right End */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
              <a
                href="/login"
                className="flex items-center space-x-2 px-6 py-3 text-gray-700 hover:text-blue-600 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 font-semibold shadow-sm hover:shadow-md"
              >
                <FiLogIn className="w-4 h-4" />
                <span>Login</span>
              </a>
              <a
                href="/signup"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FiUser className="w-4 h-4" />
                <span>Sign Up Free</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="xl:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all duration-300 shadow-sm"
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white/98 backdrop-blur-xl border-t border-gray-200/50 animate-in slide-in-from-top-5 duration-500">
            <div className="px-6 py-8 max-h-[80vh] overflow-y-auto">
              <div className="space-y-8">
                <div className="space-y-2">
                  <a 
                    href="/" 
                    className="block text-gray-700 hover:text-blue-600 font-semibold py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </a>
                  
                  <a 
                    href="/about" 
                    className="block text-gray-700 hover:text-blue-600 font-semibold py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </a>

                  <a 
                    href="/contact" 
                    className="block text-gray-700 hover:text-blue-600 font-semibold py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>

                {/* Mobile Programs */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-4 px-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    <h3 className="text-gray-900 font-bold text-lg">Programs</h3>
                    <div className="flex items-center text-sm text-white bg-gradient-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full font-semibold">
                      <FiStar className="w-4 h-4 mr-1" />
                      4.9/5
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {programs.map((program, index) => (
                      <a
                        key={index}
                        href={program.link}
                        className="flex items-center space-x-4 p-5 rounded-xl border-2 border-gray-100 hover:border-gray-300 transition-all duration-300 bg-gradient-to-r from-white to-gray-50 hover:shadow-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${program.color} text-white shadow-lg`}>
                          {program.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 mb-1 text-lg">
                            {program.name}
                          </div>
                          <div className="text-sm text-gray-600">{program.description}</div>
                        </div>
                        <FiArrowRight className="w-5 h-5 text-gray-400" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile More */}
                <div className="space-y-4">
                  <h3 className="text-gray-900 font-bold text-lg py-4 px-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                    More
                  </h3>
                  <div className="space-y-3">
                    {moreItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{item.name}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                        <FiArrowRight className="w-4 h-4 text-gray-400" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Mobile Auth Buttons */}
                <div className="pt-6 border-t border-gray-200 space-y-4">
                  <a
                    href="/login"
                    className="flex items-center justify-center space-x-2 w-full px-6 py-4 text-gray-700 border-2 border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FiLogIn className="w-5 h-5" />
                    <span>Login</span>
                  </a>
                  <a
                    href="/signup"
                    className="flex items-center justify-center space-x-2 w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transition-all duration-300 font-semibold shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FiUser className="w-5 h-5" />
                    <span>Sign Up Free</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;