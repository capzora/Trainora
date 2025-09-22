// src/models/Offer.js
import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
  courseId: { type: String, required: true },
  type: { type: String, enum: ["percentage", "flat"], required: true },
  value: { type: Number, required: true },
  startAt: { type: Date, required: true },
  endAt: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
  code: { type: String, default: null } // coupon code, optional
}, { timestamps: true });

// index for fast lookup on code (sparse allows nulls)
offerSchema.index({ code: 1 }, { sparse: true });

export default mongoose.model("Offer", offerSchema);
