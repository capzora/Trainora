import React, { useState } from "react";

const ApplyForm = () => {
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

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
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
    <section className="w-full  bg-transparent">
      <div className="max-w-7xl mx-auto rounded-xl flex flex-col md:flex-row items-center">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 p-6">
          <img src="/logo.png" alt="Logo" className="mb-4 w-40" />
          <h2 className="text-3xl font-bold mb-4 text-white">
            Let’s Connect and <br /> Grow Your Future Together!
          </h2>
          <p className="text-lg text-white">
            Have questions, ideas, or need guidance? Our team is here to support
            your journey — reach out and let’s build something impactful
            together.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
          >
            {/* Row 1 */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full bg-gray-100 text-gray-700 placeholder-gray-500 px-4 py-3 rounded-md"
              required
            />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full bg-gray-100 text-gray-700 placeholder-gray-500 px-4 py-3 rounded-md"
              required
            />

            {/* Row 2 */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail ID"
              className="w-full bg-gray-100 text-gray-700 placeholder-gray-500 px-4 py-3 rounded-md"
              required
            />
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="Qualification"
              className="w-full bg-gray-100 text-gray-700 placeholder-gray-500 px-4 py-3 rounded-md"
            />

            {/* Row 3 */}
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full bg-gray-100 text-gray-700 placeholder-gray-500 px-4 py-3 rounded-md"
            />
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-md"
            >
              <option value="">Select Experience</option>
              <option value="fresher">Fresher</option>
              <option value="1-3">1-3 Years</option>
              <option value="3-5">3-5 Years</option>
              <option value="5+">5+ Years</option>
            </select>

            {/* Submit Button */}
            <div className="col-span-1 md:col-span-2 mt-4">
              <p className="text-sm text-white mb-2">
                By submitting the form, you agree to our{" "}
                <a href="#" className="  text-[rgb(232,216,47)] underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-[rgb(232,216,47)] underline">
                  Privacy Policy
                </a>
                .
              </p>
              <button
                type="submit"
                className="w-full py-3 bg-[#F39C12] text-white font-semibold rounded-md hover:bg-[#e58e0d] transition"
              >
                Submit
              </button>
            </div>
          </form>

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-center text-sm font-medium text-gray-700">
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
