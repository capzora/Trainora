// src/models/Course.js
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  _id: { type: String }, 
  title: { type: String, required: true },
  tagline: { type: String },
  duration: { type: String },
  basePrice: { type: Number, required: true },
  currency: { type: String, default: "INR" },
  nextBatchDate: { type: String }
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
