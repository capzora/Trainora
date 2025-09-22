import express from "express";
import Offer from "../models/Offer.js";
const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const offers = await Offer.find();
    res.json({ success: true, count: offers.length, data: offers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;