import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom"; // For navigation

const LoginForm = ({
  onLogin,
  switchToSignup,
  switchToForgot,
  form,
  handleChange,
  errors,
  handleSubmit,
  register,
  onClose
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="relative w-full">
      {/* Close Button */}
      <button
        onClick={() => onClose()}
        className="absolute top-1 right-4 text-gray-600 hover:text-gray-800 text-3xl z-50"
        aria-label="Close"
      >
        ×
      </button>

      <div className="flex flex-col md:flex-row w-full">
        {/* Left Section */}
        <div className="w-full h-[80vh] md:w-1/2 flex flex-col justify-center px-6 pb-6 ">
          {/* Logo */}
           <div className="flex flex-col text-center mb-8 ">
                <a
                 
                  className="text-4xl font-bold font-logo-form text-[#12386b] "
                >
                  Trainora.ai
                </a>
                <span className="text-xs text-[#27446b] font-medium tracking-wide">
                  AI-Powered Learning
                </span>
              </div>

          <h2 className="text-3xl text-[#12386b] font-bold mb-2">
            Welcome back
          </h2>
          <p className="text-[#12386b] mb-6">Please enter your details</p>

          {/* Form */}
          <form onSubmit={handleSubmit(onLogin)} className="space-y-4">
            {/* Username */}
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full border border-[#D1D5DB] rounded-full p-4 focus:outline-none focus:ring-2 focus:ring-[#12386b] transition duration-300"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border border-[#D1D5DB] rounded-full p-4 pr-10 focus:outline-none focus:ring-2 focus:ring-[#12386b] transition duration-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right text-sm mt-1">
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={switchToForgot}
              >
                Forgot password?
              </span>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#12386b] text-white py-2 rounded-full cursor-pointer text-xl hover:bg-[#081f3d] transition duration-200"
            >
              Log In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={switchToSignup}
            >
              Register Here
            </span>
          </p>
        </div>

        {/* Right Section (Illustration) */}
        <div className="hidden md:flex w-1/2 bg-[#f3e8ff] items-center justify-center">
          <img
            src="/assets/image/loginimage.jpg"
            alt="Login Illustration"
            className="w-full h-[80vh] object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
