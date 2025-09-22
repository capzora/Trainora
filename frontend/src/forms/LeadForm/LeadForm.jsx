import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";

const LeadCaptureModal = ({ open:parentOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    graduationYear: "",
    otp: "",
  });
  const[open,setOpen] = useState(false);
  const [leadId, setLeadId] = useState(null);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifying, setVerifying] = useState(false);

  const programId = "data-science-ai"; // or pass via props
  const source = "brochure";

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendOtp = async () => {
    try {
      setSendingOtp(true);

      console.log("Sending to backend:", {
        ...formData,
        graduationYear: parseInt(formData.graduationYear),
        programId,
        source,
      });

      const res = await axios.post("http://localhost:5000/lead/request-otp", {
        ...formData,
        graduationYear: parseInt(formData.graduationYear),
        programId,
        source,
      });

      setLeadId(res.data.leadId);
      toast.success("OTP sent to your email.");
    } catch (error) {
      console.error("Error sending OTP:", error);

      if (error.response?.data?.errors) {
        toast.error(error.response.data.errors[0].msg);
      } else {
        toast.error(error.response?.data?.message || "Failed to send OTP");
      }
    } finally {
      setSendingOtp(false);
    }
  };

  const verifyOtpAndDownload = async (e) => {
    e.preventDefault();
    if (!leadId) {
      toast.error("Please send OTP first.");
      return;
    }

   try {
  setVerifying(true);
  const res = await axios.post("http://localhost:5000/lead/verify-otp", {
    leadId,
    otp: formData.otp,
  });

  // trigger download
  const a = document.createElement("a");
  a.href = "http://localhost:5000" + res.data.downloadUrl;
  a.setAttribute("download", "brochure.pdf");
  document.body.appendChild(a);
  a.click();
  a.remove();

  toast.success("OTP verified. Download started!");
  onClose();
} catch (error) {
  console.error(error);
  toast.error(error.response?.data?.message || "OTP verification failed");
} finally {
  setVerifying(false);
}

  };

useEffect(() => {
    // Parent se control
    if (parentOpen) {
      setOpen(true);
    }

    // 10 sec baad modal khulna
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [parentOpen]);

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl relative overflow-hidden flex"
          >
            <button
               onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:text-red-500 text-xl z-10"
            >
              ✕
            </button>

            {/* Left: Form */}
            <div className="w-full md:w-1/2 p-8 bg-white">
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-6">
                📘 Download Brochure
              </h3>

              <form className="space-y-5" onSubmit={verifyOtpAndDownload}>
                {/* Full Name */}
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-gray-50 border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-gray-50 border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full bg-gray-50 border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
                  />
                </div>

                {/* Graduation Year */}
                <div className="text-left">
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Graduation Year
                  </label>
                  <input
                    type="text"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    placeholder="e.g. 2025"
                    required
                    className="w-full bg-gray-50 border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
                  />
                </div>

                {/* OTP */}
                <div className="flex gap-2 items-end">
                  <div className="flex-1 text-left">
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                      OTP
                    </label>
                    <input
                      type="text"
                      name="otp"
                      value={formData.otp}
                      onChange={handleChange}
                      placeholder="Enter OTP"
                      required
                      className="w-full bg-gray-50 border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={sendOtp}
                    disabled={sendingOtp}
                    className="h-[52px] px-5 bg-gradient-to-r from-gray-100 to-gray-200 border rounded-xl font-medium hover:from-gray-200 hover:to-gray-300 transition"
                  >
                    {sendingOtp ? "Sending..." : "Send OTP"}
                  </button>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={verifying}
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
                >
                  {verifying ? "Verifying..." : "Submit & Download"}
                </button>
              </form>
            </div>

            {/* Right: Image */}
            <div className="hidden md:block w-1/2">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Brochure Preview"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadCaptureModal;
