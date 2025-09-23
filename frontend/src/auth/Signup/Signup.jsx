import React, { useState } from "react";
import { Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";

const SignupForm = ({
  onSignup,
  switchToLogin,
  form,
  handleChange,
  errors,
  handleSubmit,
  register,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRules, setShowRules] = useState(false);

  // Password validation rules
  const rules = [
    { label: "At least 1 uppercase letter", test: (pw) => /[A-Z]/.test(pw) },
    { label: "At least 1 number", test: (pw) => /\d/.test(pw) },
    { label: "At least 1 special character", test: (pw) => /[@$!%*?&]/.test(pw) },
    { label: "Minimum 8 characters", test: (pw) => pw.length >= 8 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

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
        placeholder="Name"
        className="w-full border p-3 rounded mb-3"
      />

      {/* Email */}
      <input
        type="email"
        {...register("email", { required: "Email is required" })}
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full border p-3 rounded mb-3"
      />

      {/* Password */}
      <div className="relative w-full mb-3">
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
          className="w-full border p-3 rounded pr-10"
          onFocus={() => setShowRules(true)}
          onBlur={() => setShowRules(false)}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>

        {/* Password Rules Tooltip */}
        {showRules && (
          <div className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10">
            <p className="text-sm font-semibold text-gray-700 mb-2">
              Password must include:
            </p>
            <ul className="space-y-1 text-sm">
              {rules.map((rule, i) => {
                const isValid = rule.test(form.password || "");
                return (
                  <li key={i} className="flex items-center gap-2">
                    {isValid ? (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-500" />
                    )}
                    <span
                      className={`${
                        isValid ? "text-green-600" : "text-gray-600"
                      }`}
                    >
                      {rule.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
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
        className="w-full border p-3 rounded mb-3"
      />

      {/* Submit */}
      <button
        className="w-full bg-[#0B1F3A] text-white py-2 rounded-lg mb-2"
        onClick={handleSubmit(onSignup)}
      >
        Start Learning
      </button>

      {/* Switch to Login */}
      <p
        className="text-sm text-center mt-4 text-blue-600 cursor-pointer"
        onClick={switchToLogin}
      >
        Already have an account? Login
      </p>
    </div>
  );
};

export default SignupForm;
