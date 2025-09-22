import Course from "../models/Course.js";
import Offer from "../models/Offer.js";
import Referral from "../models/Referral.js";

export const getCoursePricing = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });

    const today = new Date();
    const { code, ref } = req.query;

    let basePrice = course.basePrice;


    // Step 1: Get course offers (auto + coupons)
    let offers = await Offer.find({ courseId: course._id });
    offers = offers.filter(
      (o) =>
        o.isActive &&
        new Date(o.startAt) <= today &&
        new Date(o.endAt) >= today
    );

    // Step 2: Coupon (if provided)
    let couponOffer = null;
    if (code) {
      couponOffer = offers.find(
        (o) => o.code && o.code.toUpperCase() === code.toUpperCase()
      );
      if (!couponOffer) {
        return res.status(400).json({ error: "Invalid or expired coupon code" });
      }
    }

    // Step 3: Auto-offer (code == null)
    let autoOffer = offers.find((o) => !o.code);

    // Step 4: Referral (if provided)
    let referralOffer = null;
    if (ref) {
      referralOffer = await Referral.findOne({
        code: ref.toUpperCase(),
        isActive: true,
        startAt: { $lte: today },
        endAt: { $gte: today }
      });
      if (!referralOffer) {
        return res.status(400).json({ error: "Invalid or expired referral code" });
      }
    }

    // Step 5: Compute discounted prices
    const computePrice = (offer) => {
      if (!offer) return basePrice;
      return offer.type === "percentage"
        ? basePrice - (basePrice * offer.value) / 100
        : basePrice - offer.value;
    };

    const offersAvailable = [];

    if (autoOffer) {
      offersAvailable.push({
        code: autoOffer.code,
        type: autoOffer.type,
        value: autoOffer.value,
        finalPrice: computePrice(autoOffer)
      });
    }

    if (couponOffer) {
      offersAvailable.push({
        code: couponOffer.code,
        type: couponOffer.type,
        value: couponOffer.value,
        finalPrice: computePrice(couponOffer)
      });
    }

    if (referralOffer) {
      offersAvailable.push({
        code: referralOffer.code,
        type: referralOffer.type,
        value: referralOffer.value,
        finalPrice: computePrice(referralOffer)
      });
    }

    // Step 6: Pick best (lowest price)
    let finalPrice = basePrice;
    let appliedOffer = null;

    if (offersAvailable.length > 0) {
      const best = offersAvailable.sort((a, b) => a.finalPrice - b.finalPrice)[0];
      finalPrice = best.finalPrice;
      appliedOffer = best;
    }

    res.json({
      courseId: course._id,
      title: course.title,
      basePrice,
      finalPrice,
      currency: course.currency,
      appliedOffer,
      offersAvailable
    });
  } catch (err) {
    console.error("❌ Error in getCoursePricing:", err);
    res.status(500).json({ error: err.message });
  }
};
