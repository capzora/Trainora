import React from "react";

const ForgotForm = ({ onForgot, email, setEmail, switchToLogin }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>

      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full border p-3 rounded mb-3"
      />

      <button
        className="w-full bg-[#0B1F3A] text-white py-2 rounded-lg mb-2"
        onClick={onForgot}
      >
        Send Reset Link
      </button>

      <p className="text-sm text-center mt-4 text-blue-600 cursor-pointer" onClick={switchToLogin}>
        Back to Login
      </p>
    </div>
  );
};

export default ForgotForm;
