import Referral from "../models/Referral.js";

export const validateReferral = async (req, res) => {
  try {
    const { code } = req.params;
    const today = new Date();

    const referral = await Referral.findOne({
      code: code.toUpperCase(),
      isActive: true,
      startAt: { $lte: today },
      endAt: { $gte: today }
    });

    if (!referral) {
      return res.status(400).json({ valid: false, error: "Invalid or expired referral code" });
    }

    res.json({
      valid: true,
      code: referral.code,
      type: referral.type,
      value: referral.value,
      startAt: referral.startAt,
      endAt: referral.endAt
    });
  } catch (err) {
    console.error("❌ Error validating referral:", err);
    res.status(500).json({ error: err.message });
  }
};
