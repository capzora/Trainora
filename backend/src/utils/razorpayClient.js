// src/utils/razorpayClient.js
let razorpay = null;

if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  const Razorpay = (await import("razorpay")).default;
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  });
} else {
  console.warn("⚠️ Razorpay keys not found - Payment features disabled.");
  razorpay = {
    orders: {
      create: async () => {
        throw new Error("Razorpay disabled: No API keys");
      }
    }
  };
}

export default razorpay;
