import Offer from "../models/Offer.js";

export const validateCoupon = async (req, res) => {
  try {
    const { code } = req.params;
    const today = new Date();

    const coupon = await Offer.findOne({
      code: code.toUpperCase(),
      isActive: true,
      startAt: { $lte: today },
      endAt: { $gte: today }
    });

    if (!coupon) {
      return res.status(400).json({ valid: false, error: "Invalid or expired coupon code" });
    }

    res.json({
      valid: true,
      code: coupon.code,
      type: coupon.type,
      value: coupon.value,
      startAt: coupon.startAt,
      endAt: coupon.endAt,
      courseId: coupon.courseId
    });
  } catch (err) {
    console.error("❌ Error validating coupon:", err);
    res.status(500).json({ error: err.message });
  }
};
