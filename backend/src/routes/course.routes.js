import express from "express";
import { getAllCourses, getCourseById, getCmsSection } from "../controllers/course.controller.js";

const router = express.Router();

router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.get("/cms/:key", getCmsSection);

export default router;
