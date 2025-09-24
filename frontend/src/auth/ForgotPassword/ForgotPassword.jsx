import React from "react";

const ForgotForm = ({ onForgot, email, setEmail, switchToLogin }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
      <div className="relative w-96 p-6 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20">
        {/* Title */}
        <h2 className="text-xl font-bold text-center text-green-400 mb-2 drop-shadow">
          Forgot Password
        </h2>
        <p className="text-sm text-white text-center mb-4 drop-shadow">
          Enter your registered email to reset your password has been changed.
        </p>

        {/* Input */}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-3 rounded mb-3 text-white bg-white/10 placeholder-white border border-white/20 focus:outline-none focus:ring-0 shadow-inner"
        />

        {/* Button */}
        <button
          className="w-full bg-green-400 text-white py-2 rounded-lg mb-2 hover:bg-green-500 shadow-md hover:shadow-lg transition duration-300"
          onClick={onForgot}
        >
          Send Reset Link
        </button>

        {/* Back to login */}
        <p
          className="text-sm text-center mt-4 text-green-300 cursor-pointer hover:underline"
          onClick={switchToLogin}
        >
          Back to Login
        </p>

        {/* 3D shine effect (optional) */}
        <div className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none bg-gradient-to-br from-white/10 to-transparent opacity-10" />
      </div>
    </div>
  );
};

export default ForgotForm;
