import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useAuth } from "../../auth/Authcontext/Authcontext";

import LoginForm from "../../auth/Login/Login";
import SignupForm from "../../auth/Signup/Signup";
import ForgotForm from "../../auth/ForgotPassword/ForgotPassword";

const AuthModal = ({ open, onClose , initialView = "login"}) => {
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500" onClick={onClose}>✕</button>

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
          />
        )}

        {view === "forgot" && (
          <ForgotForm
            onForgot={forgotCall}
            email={email}
            setEmail={setEmail}
            switchToLogin={() => setView("login")}
          />
        )}
      </div>
    </div>
  );
};

export default AuthModal;
