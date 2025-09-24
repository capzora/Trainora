import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ data, courseId }) => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate(`/payment/${courseId}`); // ✅ ab correct id jaayegi
  };

  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-center text-white overflow-hidden">
      

      {/* Optional Background Image */}
      {data.image && (
        <img
          src={data.image}
          alt={data.heading}
          className="absolute inset-0 w-full h-full object-fit  -z-20"
        />
      )}

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6">
        {/* <h1 className="text-5xl font-extrabold drop-shadow-lg">
          {data.heading}
        </h1>
        <p className="mt-4 text-lg text-gray-200">{data.subheading}</p> */}

        {/* Enroll Button */}
        <button
          onClick={handleEnrollClick}
          className="mt-90 px-8 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-xl shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
