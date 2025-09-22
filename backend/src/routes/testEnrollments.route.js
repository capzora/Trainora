import express from "express";
import Enrollment from "../models/Enrollment.js";
const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const enrollments = await Enrollment.find();
    res.json({ success: true, count: enrollments.length, data: enrollments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;