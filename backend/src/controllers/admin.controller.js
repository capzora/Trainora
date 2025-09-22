// src/controllers/admin.controller.js
import Offer from "../models/Offer.js";
import Referral from "../models/Referral.js";
import Enrollment from "../models/Enrollment.js";

/* Offers CRUD */
export const createOffer = async (req, res) => {
  try {
    const offer = new Offer(req.body);
    await offer.save();
    res.status(201).json({ success: true, offer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getOffers = async (_req, res) => {
  try {
    const offers = await Offer.find().sort({ createdAt: -1 });
    res.json({ success: true, count: offers.length, data: offers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateOffer = async (req, res) => {
  try {
    const offer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!offer) return res.status(404).json({ error: "Offer not found" });
    res.json({ success: true, offer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteOffer = async (req, res) => {
  try {
    const result = await Offer.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: "Offer not found" });
    res.json({ success: true, message: "Offer deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Referrals CRUD */
export const createReferral = async (req, res) => {
  try {
    const referral = new Referral(req.body);
    await referral.save();
    res.status(201).json({ success: true, referral });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getReferrals = async (_req, res) => {
  try {
    const referrals = await Referral.find().sort({ createdAt: -1 });
    res.json({ success: true, count: referrals.length, data: referrals });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateReferral = async (req, res) => {
  try {
    const referral = await Referral.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!referral) return res.status(404).json({ error: "Referral not found" });
    res.json({ success: true, referral });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteReferral = async (req, res) => {
  try {
    const result = await Referral.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: "Referral not found" });
    res.json({ success: true, message: "Referral deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Admin: enrollments with filters & pagination */
export const getAllEnrollments = async (req, res) => {
  try {
    const { courseId, status, startDate, endDate, page = 1, limit = 50 } = req.query;
    const filter = {};
    if (courseId) filter.courseId = courseId;
    if (status) filter.paymentStatus = status;
    if (startDate && endDate) {
      filter.createdAt = { $gte: new Date(startDate), $lte: new Date(endDate) };
    }

    const skip = (Number(page) - 1) * Number(limit);
    const data = await Enrollment.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit));
    const count = await Enrollment.countDocuments(filter);
    res.json({ success: true, count, page: Number(page), limit: Number(limit), data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* Admin: stats */
export const getAdminStats = async (_req, res) => {
  try {
    const totalEnrollments = await Enrollment.countDocuments();
    const completedEnrollments = await Enrollment.countDocuments({ paymentStatus: "completed" });
    const revenueAgg = await Enrollment.aggregate([
      { $match: { paymentStatus: "completed" } },
      { $group: { _id: null, total: { $sum: "$finalPrice" } } }
    ]);
    const totalRevenue = revenueAgg[0]?.total || 0;
    const activeOffers = await Offer.countDocuments({ isActive: true });
    const activeReferrals = await Referral.countDocuments({ isActive: true });

    res.json({ success: true, totalEnrollments, completedEnrollments, totalRevenue, activeOffers, activeReferrals });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
