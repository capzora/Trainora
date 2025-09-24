import React from "react";
import { Quote } from "lucide-react";

const SuccessStories = ({ data }) => {
  return (
    <section className="relative w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our proud alumni who transformed their careers with us.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {data.map((story, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center border border-gray-100"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 left-4 w-6 h-6 text-indigo-400 opacity-30" />

              {/* Image */}
              {story.image && (
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-indigo-100 shadow"
                />
              )}

              {/* Name & Job */}
              <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
              <p className="text-sm text-indigo-600 font-medium">{story.job}</p>

              {/* Testimonial */}
              {story.story && (
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  “{story.story}”
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
