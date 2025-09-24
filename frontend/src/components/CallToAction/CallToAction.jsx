import React, { useState } from "react";

const CallToActionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    qualification: "",
    city: "",
    experience: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          qualification: "",
          city: "",
          experience: "",
          message: "",
        });
      } else {
        setStatus(`❌ ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error, please try again later.");
    }
  };

  return (
    <section className="w-full py-20 bg-[#0B1F3A] border-b text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* ✅ Responsive Box */}
        <div className="bg-[#1a2b45] md:bg-white/10 md:backdrop-blur-md rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 md:gap-8 shadow-lg">
          {/* ✅ Left Side - Text */}
          <div className="w-full md:w-1/2">
          <h1 className="text-green-400 font-semibold text-3xl">Trainora.Ai</h1>
          <span className="text-green-400 ">Excellence beyond boundaries powered by capzora</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4  mt-10 text-white">
              Let’s Connect and <br /> Grow Your Future Together!
            </h2>
            <p className="text-white/90 text-base md:text-lg">
              Have questions, ideas, or need guidance? Our team is here to support
              your journey — reach out and let’s build something impactful together.
            </p>
          </div>

          {/* ✅ Right Side - Form */}
          <div className="w-full md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full col-span-1 bg-gray-100 text-gray-700 placeholder-gray-500 px-4 py-3 rounded-md"
                required
              />
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full col-span-1 bg-gray-100 text-gray-700 placeholder-gray-500 px-4 py-3 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail ID"
                className="w-full col-span-1 bg-gray-100 text-gray-700 placeholder-gray-500 px-4 py-3 rounded-md"
                required
              />
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="Qualification"
                className="w-full col-span-1 bg-gray-100 text-gray-700 placeholder-gray-500 px-4 py-3 rounded-md"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full col-span-1 bg-gray-100 text-gray-700 placeholder-gray-500 px-4 py-3 rounded-md"
              />
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full col-span-1 bg-gray-100 text-gray-700 px-4 py-3 rounded-md"
              >
                <option value="">Select Experience</option>
                <option value="fresher">Fresher</option>
                <option value="1-3">1-3 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5+">5+ Years</option>
              </select>

              {/* Submit */}
              <div className="col-span-1 md:col-span-2 mt-4">
                <p className="text-sm text-white mb-2">
                  By submitting the form, you agree to our{" "}
                  <a href="#" className="text-green-400 underline">
                    Terms
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-green-400 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
                <button
                  type="submit"
                  className="w-full py-3 bg-green-400 text-white font-semibold rounded-md hover:bg-green-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Status Message */}
            {status && (
              <p className="mt-4 text-center text-sm font-medium text-white">
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionForm;
