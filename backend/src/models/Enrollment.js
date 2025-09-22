// src/models/Enrollment.js
import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  studentName: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },

  courseId: { type: String, required: true }, // e.g. "mern-stack"
  basePrice: { type: Number, required: true },
  finalPrice: { type: Number, required: true },
  currency: { type: String, default: "INR" },

  appliedOffer: {
    code: { type: String, default: null },
    type: { type: String, default: null },
    value: { type: Number, default: null }
  },

  referralCode: { type: String, default: null },

  paymentStatus: {
    type: String,
    enum: ["pending", "completed", "failed", "cancelled"],
    default: "pending"
  }
}, { timestamps: true });

enrollmentSchema.index({ email: 1 });
enrollmentSchema.index({ phone: 1 });
enrollmentSchema.index({ courseId: 1 });

export default mongoose.model("Enrollment", enrollmentSchema);
