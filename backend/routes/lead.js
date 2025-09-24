const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const Lead = require('../models/lead');  // adjust path as needed
const sgMail = require('@sendgrid/mail');
const path = require("path")
const router = express.Router();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



router.post('/request-otp',
  body('name').notEmpty(),
  body('email').isEmail(),
  body('phone').isMobilePhone(),
  body('graduationYear').isInt({ min: 2000, max: 2100 }).withMessage("Enter valid graduation year"),
  body('programId').notEmpty(),
  body('source').isIn(['brochure']),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, phone, graduationYear, programId, source } = req.body;

    // Generate OTP and hash it
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpHash = await bcrypt.hash(otp, 10);

    const lead = new Lead({
      name, email, phone, graduationYear, programId, source,
      otp: otpHash,
    });

    await lead.save();

    // Send OTP via SendGrid
   const msg = {
  to: email,
  from: process.env.SENDGRID_FROM_EMAIL,
  subject: "Your OTP for Trainora.ai",
  html: `
    <div style="font-family: Arial, sans-serif; background:#ffffff; padding:40px;">

      <!-- Logo / Branding -->
      <table align="center" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:30px;">
  <tr>
   
    <td style="padding-left:10px;">
      <h1 style="font-size:70px; font-weight:bold; color:#191970; margin:0;">TRAINORA.AI</h1>
      <
    </td>
  </tr>
</table>

      <!-- Greeting -->
      <p style="font-size:16px; color:#333;">Hello <b>${name}</b>,</p>

      <!-- Body -->
      <p style="font-size:15px; color:#333; line-height:1.6;">
        We have received a request for verifying your account on <b>Trainora.ai</b>.
      </p>
      <p style="font-size:15px; color:#333; line-height:1.6;">
        Please use the following OTP. It is valid for <b>5 minutes</b>.
      </p>

      <!-- OTP Box -->
      <div style="font-size:24px; font-weight:bold; letter-spacing:4px; color:#0B1F3A; margin:20px 0; text-align:center;">
        ${otp}
      </div>

      <!-- Extra -->
      <p style="font-size:14px; color:#666;">
        If you didn’t request this, you can safely ignore this email.
      </p>

      <!-- Footer -->
      <p style="font-size:12px; color:#999; margin-top:30px; text-align:center;">
        &copy; ${new Date().getFullYear()} Trainora.ai. All rights reserved.
      </p>
    </div>
  `,
};



    try {
      await sgMail.send(msg);
     return res.json({ message: 'OTP sent to email', leadId: lead._id.toString() });

    } catch (error) {
  console.error('SendGrid error:', error.response?.body || error);
  return res.status(500).json({ message: 'Failed to send OTP email' });
}
  }
);

router.post(
  "/verify-otp",
  body("leadId").notEmpty(),
  body("otp").notEmpty(),
  async (req, res) => {
    try {
      const { leadId, otp } = req.body;
      const lead = await Lead.findById(leadId);

      if (!lead) return res.status(404).json({ message: "Lead not found" });

      const valid = await bcrypt.compare(otp, lead.otp);
      if (!valid) return res.status(400).json({ message: "Invalid OTP" });

      lead.verifiedAt = new Date();
      lead.isVerified = true;
      await lead.save();

      if (lead.source !== "brochure") {
        return res
          .status(400)
          .json({ message: "Only brochure source supported" });
      }

      // ✅ Directly send the file after OTP verification
     const filePath = path.join(__dirname, "../brochures", `${lead.programId}.pdf`);
return res.download(filePath, `${lead.programId}.pdf`);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Something went wrong" });
    }
  }
);

module.exports = router;
