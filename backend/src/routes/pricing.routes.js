import express from "express";
import { getCoursePricing } from "../controllers/pricing.controller.js";

const router = express.Router();

router.get("/:id", getCoursePricing);

export default router;
