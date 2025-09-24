const mongoose = require("mongoose");

const ctaSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    experience: { type: Number, required: true },
    qualification: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CallToAction", ctaSchema);
