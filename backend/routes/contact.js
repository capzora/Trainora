const express = require("express");
const Contact = require("../models/contact"); // make sure path is correct
const router = express.Router();

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;

    // Check if all fields are present
    if (!name || !email || !message || !subject) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new Contact entry with the data from the request body
    const contact = new Contact({ name, email, message, subject });

    // Save the new contact message to the database
    await contact.save();

    return res.status(201).json({
      message: "Message received successfully!",
      contact,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
