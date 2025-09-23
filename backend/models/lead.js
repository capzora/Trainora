const mongoose = require("mongoose")

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  graduationYear: { type: Number, required: true },
  programId: { type: String, required: true },
  otp: { type: String, required: true },
  source: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  verifiedAt: { type: Date },
  createdAt: { type: Date, default: Date.now, expires: 300 }, // expires after 5 minutes
});

module.exports = mongoose.model('Lead', leadSchema);

