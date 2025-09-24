import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { programsData } from "../../Data/ProgramData/ProgramData";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const selectedCourse = programsData[courseId];

  if (!selectedCourse) {
    return (
      <p className="text-center mt-10 text-red-600 font-semibold">
        Invalid course! Please go back.
      </p>
    );
  }

  const coupons = [
    { code: "CAPZORA10", discount: 0.1 },
    { code: "AI20", discount: 0.2 },
    { code: "ML15", discount: 0.15 },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coupon: "",
  });

  // ✅ हमेशा Number में convert करो
  const basePrice =
    Number(selectedCourse.feeStructure?.amount) ||
    Number(selectedCourse.price);

  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(basePrice);
  const [appliedCoupon, setAppliedCoupon] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const applyCoupon = () => {
    const selected = coupons.find((c) => c.code === formData.coupon);
    if (selected) {
      const discountAmount = basePrice * selected.discount;
      setDiscount(selected.discount);
      setFinalPrice(basePrice - discountAmount);
      setAppliedCoupon(selected.code);
    } else {
      setDiscount(0);
      setFinalPrice(basePrice);
      setAppliedCoupon("");
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert(
      `Proceeding to payment gateway. Final Price: ₹${finalPrice.toLocaleString()}`
    );
  };

  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.phone.trim();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <motion.section
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative flex flex-col md:flex-row w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-white"
      >
        {/* Left Image */}
        <div className="md:flex-1 hidden md:block relative">
          <img
            src={selectedCourse.hero?.image || selectedCourse.image}
            alt={selectedCourse.title}
            className="w-full h-full object-cover rounded-l-xl"
          />
          <div className="absolute inset-0 bg-black/30 rounded-l-xl"></div>
        </div>

        {/* Right Form */}
        <div className="flex-1 p-6 flex flex-col justify-center">
          <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold text-gray-800">
              {selectedCourse.title}
            </h3>
            <p className="text-sm text-gray-600">
              Base Price: ₹{basePrice.toLocaleString()}
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center md:text-left text-[#102d57]">
            Complete Your Enrollment
          </h2>

          <form onSubmit={handlePayment} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            />

            {/* Coupon */}
            <div className="flex gap-2 items-center">
              <select
                name="coupon"
                value={formData.coupon}
                onChange={handleChange}
                className="flex-1 px-3 py-2 border rounded-lg focus:ring focus:ring-green-300"
              >
                <option value="">Select Coupon (Optional)</option>
                {coupons.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} ({c.discount * 100}% OFF)
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={applyCoupon}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Apply
              </button>
            </div>

            {/* Price Summary */}
            {appliedCoupon ? (
              <div className="mt-2 p-4 bg-green-100 border border-green-300 text-green-800 rounded-lg text-sm">
                <div>
                  Coupon Applied: <b>{appliedCoupon}</b>
                </div>
                <div>Original Price: ₹{basePrice.toLocaleString()}</div>
                <div>
                  Discount: -₹{(basePrice * discount).toLocaleString()}
                </div>
                <div className="font-semibold text-blue-600">
                  Total to Pay: ₹{finalPrice.toLocaleString()}
                </div>
              </div>
            ) : (
              <div className="text-lg font-semibold mt-2">
                Total Price:{" "}
                <span className="text-blue-600">
                  ₹{finalPrice.toLocaleString()}
                </span>
              </div>
            )}

            <button
              type="submit"
              className={`w-full mt-2 px-6 py-2 rounded-lg font-semibold ${
                isFormValid
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!isFormValid}
            >
              Payment & Pay
            </button>
          </form>
        </div>

        {/* Cross Button */}
        <button
          onClick={() => navigate("/home")}
          className="absolute top-3 right-3 bg-white hover:bg-gray-200 text-black rounded-full w-8 h-8 flex items-center justify-center shadow-md"
        >
          ✕
        </button>
      </motion.section>
    </div>
  );
};

export default PaymentPage;
