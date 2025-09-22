// src/controllers/enrollment.controller.js
import Enrollment from "../models/Enrollment.js";
import Course from "../models/Course.js";
import calculateFinalPrice from "../utils/pricingHelper.js";

// Create enrollment (no payment yet)
export const createEnrollment = async (req, res) => {
  try {
    const { studentName, email, phone, courseId, couponCode, referralCode } = req.body;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ error: "Course not found" });

    // get pricing (throws if coupon invalid)
    const pricing = await calculateFinalPrice(courseId, { couponCode, referralCode });

    const enrollment = new Enrollment({
      studentName,
      email,
      phone,
      courseId,
      basePrice: pricing.basePrice,
      finalPrice: pricing.finalPrice,
      currency: pricing.currency,
      appliedOffer: pricing.appliedOffer,
      referralCode: referralCode || null,
      paymentStatus: "pending"
    });

    await enrollment.save();

    // NOTE: Dev2 will implement actual email sending. Keep a placeholder:
    // e.g. sendEnrollmentEmail(email, enrollment) // Dev2 will hook this function
    // console.log("placeholder: would send confirmation email here");

    res.status(201).json({ success: true, enrollment });
  } catch (err) {
    // pricing helper may throw for invalid coupon -> return 400
    if (err.message && err.message.toLowerCase().includes("coupon")) {
      return res.status(400).json({ error: err.message });
    }
    console.error("createEnrollment error:", err);
    res.status(500).json({ error: err.message });
  }
};

export const getEnrollmentById = async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    if (!enrollment) return res.status(404).json({ error: "Enrollment not found" });
    res.json({ success: true, enrollment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getEnrollmentsByEmail = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ email: req.params.email }).sort({ createdAt: -1 });
    res.json({ success: true, count: enrollments.length, data: enrollments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find().sort({ createdAt: -1 });
    res.json({ success: true, count: enrollments.length, data: enrollments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
