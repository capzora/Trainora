const express = require("express");
const CallToAction = require('../models/callToSection');
const router = express.Router();

router.post("/call-to-section", async (req, res) => {
  try {
    const { name, email, phone, city, experience, qualification } = req.body;

    // Check if all fields are present
    if (!name || !email || !phone || !city || !experience || !qualification) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate phone number (must be exactly 10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: "Phone number must be exactly 10 digits" });
    }

    // Validate experience (must be a valid number)
    if (isNaN(experience) || experience < 0) {
      return res.status(400).json({ message: "Experience must be a valid positive number" });
    }

    // Check if the email or phone number already exists in the database
    const existingCta = await CallToAction.findOne({ $or: [{ email }, { phone }] });
    if (existingCta) {
      return res.status(400).json({ message: "You have already submitted your details" });
    }

    // If no existing record, save the new one
    const cta = new CallToAction({ name, email, phone, city, experience, qualification });
    await cta.save();

    return res.status(201).json({
      message: "CTA submitted successfully!",
      cta,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
