// src/routes/admin.routes.js
import express from "express";
import {
  createOffer, getOffers, updateOffer, deleteOffer,
  createReferral, getReferrals, updateReferral, deleteReferral,
  getAllEnrollments, getAdminStats
} from "../controllers/admin.controller.js";

const router = express.Router();

/* Offers */
router.post("/offers", createOffer);
router.get("/offers", getOffers);
router.put("/offers/:id", updateOffer);
router.delete("/offers/:id", deleteOffer);

/* Referrals */
router.post("/referrals", createReferral);
router.get("/referrals", getReferrals);
router.put("/referrals/:id", updateReferral);
router.delete("/referrals/:id", deleteReferral);

/* Enrollments & stats */
router.get("/enrollments", getAllEnrollments);
router.get("/stats", getAdminStats);

export default router;
