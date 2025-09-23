import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";

const ResetPassword = ({ userId, token, onSuccess }) => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showRules, setShowRules] = useState(false);

  // Password validation rules
  const rules = [
    { label: "At least 1 uppercase letter", test: (pw) => /[A-Z]/.test(pw) },
    { label: "At least 1 number", test: (pw) => /\d/.test(pw) },
    { label: "At least 1 special character", test: (pw) => /[@$!%*?&]/.test(pw) },
    { label: "Minimum 8 characters", test: (pw) => pw.length >= 8 },
  ];

  const handleReset = async () => {
    if (!password || !confirm) {
      toast.error("All fields are required");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:5000/auth/reset-password", {
        userId,
        token,
        password,
      });

      toast.success("Password reset successful");
      setTimeout(() => {
        onSuccess?.(); // optional callback (e.g., redirect to login)
      }, 1000);
    } catch (error) {
      console.error(error);
      const message = error.response?.data?.message || "Something went wrong";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-lg p-12 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center mb-6">Reset Password</h2>

        {/* Password Field */}
        <div className="relative mb-5">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            className="w-full border p-4 rounded text-lg pr-12 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onFocus={() => setShowRules(true)}
            onBlur={() => setShowRules(false)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
          >
            {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
          </button>

          {/* Password Rules */}
          {showRules && (
            <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10">
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Password must include:
              </p>
              <ul className="space-y-1 text-sm">
                {rules.map((rule, i) => {
                  const isValid = rule.test(password);
                  return (
                    <li key={i} className="flex items-center gap-2">
                      {isValid ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                      <span className={isValid ? "text-green-600" : "text-gray-600"}>
                        {rule.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative mb-5">
          <input
            type={showConfirm ? "text" : "password"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm Password"
            className="w-full border p-4 rounded text-lg pr-12 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
          >
            {showConfirm ? <EyeOff size={24} /> : <Eye size={24} />}
          </button>
        </div>

        <button
          className="w-full bg-[#0B1F3A] text-white py-3 rounded-lg mt-2 text-lg font-medium disabled:opacity-60"
          onClick={handleReset}
          disabled={loading}
        >
          {loading ? "Setting Password..." : "Set Password"}
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
