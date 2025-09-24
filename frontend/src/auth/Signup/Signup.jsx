import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignupForm = ({
  onSignup,
  switchToLogin,
  form,
  handleChange,
  errors,
  handleSubmit,
  register,
  onClose,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full relative">
      {/* Close Button */}
      <button
        onClick={() => onClose()}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-3xl z-50"
        aria-label="Close"
      >
        ×
      </button>

      {/* Left - Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-white">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Ready to start your success story?
          </h2>
          <p className="text-gray-600 mb-6">
            Signup to our website and start leafing through your favorite literature today!
          </p>

          <form className="space-y-4" onSubmit={handleSubmit(onSignup)}>
            {/* Name */}
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "At least 3 characters" },
              })}
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-[#0B1F3A]"
            />

            {/* Email */}
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-[#0B1F3A]"
            />

            {/* Password (Simple) */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "At least 8 characters" },
                })}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create Password"
                className="w-full border-b border-gray-300 p-2 pr-10 focus:outline-none focus:border-[#0B1F3A]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Phone */}
            <input
              type="tel"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Must be 10 digits",
                },
              })}
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full border-b border-gray-300 p-2 focus:outline-none focus:border-[#0B1F3A]"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0B1F3A] text-white py-2 rounded-full mt-4 shadow hover:bg-[#081A2F] transition"
            >
              Sign up
            </button>
          </form>

          {/* Switch to Login */}
          <p
            className="text-sm text-center mt-4 text-blue-600 cursor-pointer"
            onClick={switchToLogin}
          >
            Already have an account? Login
          </p>
        </div>
      </div>

      {/* Right - Illustration Section */}
      <div className="hidden md:flex md:w-1/2 bg-[#fdfdfd] items-center justify-center">
        <img
          src="/assets/image/signupimage.jpg"
          alt="Signup Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default SignupForm;
