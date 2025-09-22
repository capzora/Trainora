import razorpay from "../utils/razorpayClient.js";
import Enrollment from "../models/Enrollment.js";

// Step 1: Create Razorpay Order
export const createOrder = async (req, res) => {
  try {
    const { enrollmentId } = req.body;

    // Fetch enrollment
    const enrollment = await Enrollment.findById(enrollmentId);
    if (!enrollment) return res.status(404).json({ error: "Enrollment not found" });

    // Razorpay expects amount in paise (multiply by 100)
    const options = {
      amount: enrollment.finalPrice * 100,
      currency: enrollment.currency,
      receipt: `enroll_${enrollment._id}`,
      payment_capture: 1
    };

    const order = await razorpay.orders.create(options);

    res.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID
    });
  } catch (err) {
    console.error("❌ Error creating Razorpay order:", err);
    res.status(500).json({ error: err.message });
  }
};

// Step 2: Verify Payment
export const verifyPayment = async (req, res) => {
  try {
    const { enrollmentId, razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;


    // Update enrollment
    const enrollment = await Enrollment.findByIdAndUpdate(
      enrollmentId,
      { paymentStatus: "completed" },
      { new: true }
    );

    res.json({ success: true, message: "Payment verified", enrollment });
  } catch (err) {
    console.error("❌ Error verifying Razorpay payment:", err);
    res.status(500).json({ error: err.message });
  }
};
