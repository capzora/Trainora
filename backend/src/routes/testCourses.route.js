import express from "express";
import Course from "../models/Course.js";
const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const courses = await Course.find();
    res.json({ success: true, count: courses.length, data: courses });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;