// src/index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import courseRoutes from "./routes/course.routes.js";
import pricingRoutes from "./routes/pricing.routes.js";
import referralRoutes from "./routes/referral.routes.js";
import couponRoutes from "./routes/coupon.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import enrollmentRoutes from "./routes/enrollment.routes.js";

// test routes
import testRoutes from "./routes/test.route.js";
import testCourses from "./routes/testCourses.route.js";
import testOffers from "./routes/testOffers.route.js";
import testReferrals from "./routes/testReferrals.route.js";
import testEnrollments from "./routes/testEnrollments.route.js";

// middleware
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
const app = express();

// --- basic middleware ---
app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev")); // request logger (dev)
app.use(logger); // lightweight custom logger (prints response time)

// --- public/simple routes ---
app.get("/healthz", (_req, res) => res.json({ ok: true }));

// --- main routes (register all non-payment routes first) ---
app.use("/api/courses", courseRoutes);
app.use("/api/pricing", pricingRoutes);
app.use("/api/referrals", referralRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/enrollments", enrollmentRoutes);

// --- test routes (single namespace, no duplicates) ---
app.use("/api/test", testRoutes);
app.use("/api/test/courses", testCourses);
app.use("/api/test/offers", testOffers);
app.use("/api/test/referrals", testReferrals);
app.use("/api/test/enrollments", testEnrollments);

// --- conditional payments route (dynamic import, safe while Razorpay is paused) ---
// To enable payment routes set ENABLE_PAYMENTS=true in .env (and ensure razorpayClient is safe)
const enablePayments = process.env.ENABLE_PAYMENTS === "true";

const tryRegisterPaymentRoutes = async () => {
  if (!enablePayments) {
    console.log("Payments routes disabled (ENABLE_PAYMENTS not set).");
    return;
  }

  try {
    const paymentModule = await import("./routes/payment.routes.js");
    const paymentRoutes = paymentModule.default;
    app.use("/api/payments", paymentRoutes);
    console.log("Payments routes enabled.");
  } catch (err) {
    console.warn("Warning: failed to load payment routes:", err.message);
    // keep server running; Dev2 / manager can fix razorpayClient or enable later
  }
};

// --- 404 fallback (after all route registrations) ---
app.use((req, res) => res.status(404).json({ success: false, error: "Not found" }));

// --- global error handler (last middleware) ---
app.use(errorHandler);

// --- start server (connect DB first then start) ---
const start = async () => {
  const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/trainora_db";
  if (!process.env.MONGODB_URI) {
    console.warn("No MONGODB_URI in .env — using local fallback:", mongoUri);
  }

  try {
    await mongoose.connect(mongoUri, {
      // optional mongoose settings
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ MongoDB connected to:", mongoose.connection.name);

    // Register payment routes only after DB connection (safe dynamic import)
    await tryRegisterPaymentRoutes();

    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`🚀 API running on :${port}`);
    });

    // graceful shutdown handlers (optional but useful)
    process.on("SIGINT", () => {
      console.log("SIGINT received — closing server.");
      mongoose.disconnect().then(() => process.exit(0));
    });
    process.on("SIGTERM", () => {
      console.log("SIGTERM received — closing server.");
      mongoose.disconnect().then(() => process.exit(0));
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
};

start();
