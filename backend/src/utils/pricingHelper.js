// src/utils/pricingHelper.js
import Course from "../models/Course.js";
import Offer from "../models/Offer.js";
import Referral from "../models/Referral.js";

/**
 * calculateFinalPrice(courseId, options)
 * options: { couponCode, referralCode }
 * returns: { basePrice, finalPrice, appliedOffer, title, currency }
 */
export const calculateFinalPrice = async (courseId, { couponCode = null, referralCode = null } = {}) => {
  const today = new Date();

  const course = await Course.findById(courseId);
  if (!course) throw new Error("Course not found");

  let basePrice = course.basePrice;
  let finalPrice = basePrice;
  let appliedOffer = null;

  // fetch active offers for this course
  let offers = await Offer.find({
    courseId,
    isActive: true,
    startAt: { $lte: today },
    endAt: { $gte: today }
  });

  let couponOffer = null;
  if (couponCode) {
    couponOffer = offers.find(o => o.code && o.code.toUpperCase() === couponCode.toUpperCase());
    if (!couponOffer) {
      // caller may want to handle invalid coupon; throw so controller returns 400
      throw new Error("Invalid or expired coupon code");
    }
  }

  let autoOffer = offers.find(o => !o.code);

  let finalCouponPrice = couponOffer
    ? (couponOffer.type === "percentage" ? basePrice - (basePrice * couponOffer.value) / 100 : basePrice - couponOffer.value)
    : basePrice;

  let finalAutoPrice = autoOffer
    ? (autoOffer.type === "percentage" ? basePrice - (basePrice * autoOffer.value) / 100 : basePrice - autoOffer.value)
    : basePrice;

  // pick best of coupon vs auto
  if (couponOffer && finalCouponPrice <= finalAutoPrice) {
    finalPrice = finalCouponPrice;
    appliedOffer = { code: couponOffer.code, type: couponOffer.type, value: couponOffer.value };
  } else if (autoOffer) {
    finalPrice = finalAutoPrice;
    appliedOffer = { code: autoOffer.code, type: autoOffer.type, value: autoOffer.value };
  }

  // referral check
  if (referralCode) {
    const referral = await Referral.findOne({
      code: referralCode.toUpperCase(),
      isActive: true,
      startAt: { $lte: today },
      endAt: { $gte: today }
    });

    if (referral) {
      let referralPrice = referral.type === "percentage"
        ? basePrice - (basePrice * referral.value) / 100
        : basePrice - referral.value;

      if (referralPrice < finalPrice) {
        finalPrice = referralPrice;
        appliedOffer = { code: referral.code, type: referral.type, value: referral.value };
      }
    }
  }

  return {
    courseId: course._id,
    title: course.title,
    basePrice,
    finalPrice,
    currency: course.currency,
    appliedOffer
  };
};
export default calculateFinalPrice;
