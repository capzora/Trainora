import express from "express";
import { validateCoupon } from "../controllers/coupon.controller.js";

const router = express.Router();

router.get("/validate/:code", validateCoupon);

export default router;
