// src/models/Referral.js
import mongoose from "mongoose";

const referralSchema = new mongoose.Schema({
  code: { type: String, required: true },
  type: { type: String, enum: ["percentage", "flat"], required: true },
  value: { type: Number, required: true },
  startAt: { type: Date, required: true },
  endAt: { type: Date, required: true },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

referralSchema.index({ code: 1 }, { unique: false }); 

export default mongoose.model("Referral", referralSchema);
