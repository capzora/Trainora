import express from "express";
import {
  createEnrollment,
  getEnrollmentById,
  getEnrollmentsByEmail,
  listAllEnrollments,
} from "../controllers/enrollment.controller.js";
import validateEnrollment from "../middleware/validateEnrollment.js";

const router = express.Router();

// Student creates enrollment
router.post("/", createEnrollment);

router.post("/", validateEnrollment, createEnrollment);

// Student fetches all their enrollments (by email)
router.get("/email/:email", getEnrollmentsByEmail);

// Admin fetches all enrollments
router.get("/", listAllEnrollments);

// Get single enrollment
router.get("/:id", getEnrollmentById);

export default router;
