import express from "express";
import { validateReferral } from "../controllers/referral.controller.js";

const router = express.Router();

router.get("/validate/:code", validateReferral);

export default router;
