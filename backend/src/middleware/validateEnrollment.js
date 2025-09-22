// src/middleware/validateEnrollment.js
export default function validateEnrollment(req, res, next) {
  const { studentName, email, phone, courseId } = req.body;

  if (!studentName || typeof studentName !== "string" || studentName.trim().length < 2) {
    return res.status(400).json({ error: "Invalid studentName" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) return res.status(400).json({ error: "Invalid email" });

  const phoneDigits = (phone || "").replace(/\D/g, "");
  if (!phone || phoneDigits.length < 7 || phoneDigits.length > 15) {
    return res.status(400).json({ error: "Invalid phone" });
  }

  if (!courseId) return res.status(400).json({ error: "courseId is required" });

  next();
}
