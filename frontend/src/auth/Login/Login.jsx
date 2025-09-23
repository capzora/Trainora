import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = ({ onLogin, switchToSignup, switchToForgot, form, handleChange, errors, handleSubmit, register }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

      {errors.email && <div className="text-red-500">{errors.email.message}</div>}
      <input
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
        })}
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full border p-3 rounded mb-3"
      />

      {errors.password && <div className="text-red-500">{errors.password.message}</div>}
      <div className="relative w-full mb-3">
        <input
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: "Password is required",
            minLength: { value: 8, message: "Password must be atleast 8 characters" },
          })}
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border p-3 rounded pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <button
        className="w-full bg-[#0B1F3A] text-white py-2 rounded-lg mb-2"
        onClick={handleSubmit(onLogin)}
      >
        Login
      </button>

      <div className="flex justify-between mt-4 text-sm">
        <p className="text-blue-600 cursor-pointer" onClick={switchToSignup}>
          Create Account
        </p>
        <p className="text-blue-600 cursor-pointer" onClick={switchToForgot}>
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
