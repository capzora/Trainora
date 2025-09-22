import express from "express";
import Referral from "../models/Referral.js";
const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const referrals = await Referral.find();
    res.json({ success: true, count: referrals.length, data: referrals });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;