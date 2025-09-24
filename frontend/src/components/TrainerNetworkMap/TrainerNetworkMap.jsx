import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const TrainerNetworkMap = () => {
  const locations = [
    { city: "Delhi", x: "55%", y: "30%" },
    { city: "Mumbai", x: "35%", y: "65%" },
    { city: "Bangalore", x: "60%", y: "80%" },
    { city: "Kolkata", x: "75%", y: "40%" },
    { city: "Hyderabad", x: "55%", y: "70%" },
  ];

  return (
    <section className="relative py-20 bg-white text-[#0B1F3A]">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Our Trainer Network
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          We have a growing network of certified trainers across India, ensuring
          quality learning experiences wherever you are.
        </motion.p>

        {/* Map Container */}
        <div className="relative w-full max-w-5xl mx-auto h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          {/* Background Map */}
          <img
            src="/india-map.png"
            alt="India Trainer Network"
            className="absolute inset-0 w-full h-full object-cover opacity-95"
          />

          {/* Location Markers */}
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring" }}
              className="absolute"
              style={{ top: loc.y, left: loc.x }}
            >
              {/* Ripple Animation */}
              <span className="absolute -inset-4 rounded-full bg-blue-500 opacity-30 animate-ping"></span>

              {/* Pin Icon */}
              <div className="relative flex flex-col items-center">
                <MapPin className="text-blue-600 w-6 h-6 drop-shadow-md" />
                <span className="mt-1 text-xs font-medium bg-white text-[#0B1F3A] border border-gray-300 px-2 py-1 rounded-lg shadow-md">
                  {loc.city}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainerNetworkMap;
