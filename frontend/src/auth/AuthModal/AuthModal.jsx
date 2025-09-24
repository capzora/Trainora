import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useAuth } from "../../auth/Authcontext/Authcontext";

import LoginForm from "../../auth/Login/Login";
import SignupForm from "../../auth/Signup/Signup";
import ForgotForm from "../../auth/ForgotPassword/ForgotPassword";

const AuthModal = ({ open, onClose, initialView = "login" }) => {
  const { login } = useAuth();
  const [view, setView] = useState(initialView); // login | signup | forgot
  const [form, setForm] = useState({ email: "", password: "", name: "", phone: "" });
  const [email, setEmail] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  React.useEffect(() => {
    if (open) setView(initialView);
  }, [open, initialView]);

  // ✅ Login API
  const loginCall = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", data, { withCredentials: true });
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success("Login successful!");
      login();
      setTimeout(onClose, 800);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  // ✅ Signup API
  const signupCall = async (data) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/register", data);
      if (res.status === 201) {
        toast.success("User created successfully!");
        setTimeout(() => setView("login"), 800);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  // ✅ Forgot Password API
  const forgotCall = async () => {
    if (!email) return toast.error("Email is required");
    try {
      await axios.post("http://localhost:5000/auth/forgot-password", { email });
      toast.success("Reset link sent! Check your email");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send reset link");
    }
  };

  if (!open) return null;

  return (
    <>
      {view === "forgot" ? (
        // 🔥 Sirf card dikhayenge, background/blur hata diya
        <ForgotForm
          onForgot={forgotCall}
          email={email}
          setEmail={setEmail}
          switchToLogin={() => setView("login")}
          onClose={onClose}
        />
      ) : (
        // Login / Signup ke liye modal + bg
        <div className="fixed inset-0 backdrop-blur-sm z-[9999] flex items-center pt-10 justify-center">
          <div className="w-full max-w-5xl h-[80vh] bg-white rounded-xl shadow-lg overflow-hidden">
            {view === "login" && (
              <LoginForm
                onLogin={loginCall}
                switchToSignup={() => setView("signup")}
                switchToForgot={() => setView("forgot")}
                form={form}
                handleChange={handleChange}
                errors={errors}
                handleSubmit={handleSubmit}
                register={register}
                onClose={onClose}
              />
            )}
            {view === "signup" && (
              <SignupForm
                onSignup={signupCall}
                switchToLogin={() => setView("login")}
                form={form}
                handleChange={handleChange}
                errors={errors}
                handleSubmit={handleSubmit}
                register={register}
                onClose={onClose}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;
