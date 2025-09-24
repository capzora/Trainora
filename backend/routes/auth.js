const express = require('express');
const { body, validationResult } = require('express-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const passport = require("passport");
const User = require('../models/user');
const { hashToken, signAccessToken, signRefreshToken } = require('../utils/tokens');
const { sendEmail } = require('../utils/email');
const Contact = require("../models/contact")
const router = express.Router();

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.COOKIE_SECURE === 'true', // true in production (HTTPS)
  sameSite: 'strict',
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
};

/** REGISTER */
router.post('/register',
  body('name').notEmpty(),
  body('email').isEmail(),
  body('phone').isMobilePhone().withMessage('Valid phone number required'),  // ✅ validation
  body('password').isLength({ min: 8 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, email, phone, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: 'Email already in use' });

    const user = new User({ name, email, phone });
    await user.setPassword(password);
    await user.save();

    // optional: send welcome/verify email here
    // await sendEmail({ to: email, subject:'Welcome', text:'Welcome!', html:'<b>Welcome</b>' });

    return res.status(201).json({ message: 'Account created Successfully' });
  }
);


/** LOGIN */
router.post('/login',
  body('email').isEmail(),
  body('password').exists(),
  async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const valid = await user.validatePassword(password);
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

    // create tokens
    const jti = crypto.randomBytes(16).toString('hex');
    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user, jti);

    // store hashed refresh token in DB
    const rHash = hashToken(refreshToken);
    const expiresAt = new Date(Date.now() + (7 * 24 * 60 * 60 * 1000)); // match JWT_REFRESH_EXPIRES
    user.refreshTokens.push({ tokenHash: rHash, expiresAt });
    await user.save();

    // set httpOnly cookie (recommended) and return access token
    res.cookie('refreshToken', refreshToken, COOKIE_OPTIONS);
    return res.json({ accessToken, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  }
);

/** REFRESH (rotate refresh token) */
router.post('/refresh', async (req, res) => {
  // get refresh token, prefer cookie
  const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;
  if (!refreshToken) return res.status(401).json({ message: 'No token' });

  try {
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const userId = payload.sub;
    const jti = payload.jti;

    const user = await User.findById(userId);
    if (!user) return res.status(401).json({ message: 'Invalid token' });

    // verify token present in DB
    const rHash = hashToken(refreshToken);
    const stored = user.refreshTokens.find(rt => rt.tokenHash === rHash);
    if (!stored) return res.status(401).json({ message: 'Invalid token' });

    // rotate: remove old token record and add new token
    user.refreshTokens = user.refreshTokens.filter(rt => rt.tokenHash !== rHash);

    const newJti = crypto.randomBytes(16).toString('hex');
    const newAccessToken = signAccessToken(user);
    const newRefreshToken = signRefreshToken(user, newJti);
    const newHash = hashToken(newRefreshToken);
    const newExpiresAt = new Date(Date.now() + (7 * 24 * 60 * 60 * 1000));

    user.refreshTokens.push({ tokenHash: newHash, expiresAt: newExpiresAt });
    await user.save();

    res.cookie('refreshToken', newRefreshToken, COOKIE_OPTIONS);
    return res.json({ accessToken: newAccessToken });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
});

/** LOGOUT - revoke the provided refresh token */
router.post('/logout', async (req, res) => {
  const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;
  if (refreshToken) {
    try {
      const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
      const user = await User.findById(payload.sub);
      if (user) {
        const rHash = hashToken(refreshToken);
        user.refreshTokens = user.refreshTokens.filter(rt => rt.tokenHash !== rHash);
        await user.save();
      }
    } catch (e) { /* ignore */ }
  }
  // clear cookie
  res.clearCookie('refreshToken', COOKIE_OPTIONS);
  return res.json({ message: 'Logged out' });
});

/** FORGOT PASSWORD - send reset link (with token) */
router.post('/forgot-password', body('email').isEmail(), async (req, res) => {
  const { email } = req.body;

  // normalize email to lowercase
  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    return res.json({ message: 'If that email exists, a reset link has been sent' });
  }

  const token = crypto.randomBytes(32).toString('hex');
  user.resetPasswordTokenHash = hashToken(token);
  user.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1 hour
  await user.save();

  const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}&id=${user._id}`;
console.log("RESET LINK:", resetLink); // 👈 TEMP: log it

  await sendEmail({
  to: user.email,
  subject: "Reset your password - Trainora.ai",
  html: `
    <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:20px; text-align:center;">

      <!-- Banner -->
     <table align="center" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:30px;">
  <tr>
   
    <td style="padding-left:10px;">
      <h1 style="font-size:70px; font-weight:bold; color:#191970; margin:0;">TRAINORA.AI</h1>
      <
    </td>
  </tr>
</table>

      <!-- Body -->
      <div style="background:#ffffff; margin-top:20px; padding:20px; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1); text-align:left;">
        <p style="font-size:16px; color:#333;">
          Hi <b>${user.name || "User"}</b>,
        </p>
        <p style="font-size:16px; color:#333;">
          We received a request to reset your password for your <b>Trainora.ai</b> account.
        </p>

        <div style="text-align:center; margin:30px 0;">
          <a href="${resetLink}" 
             style="background:#0B1F3A; color:#fff; padding:12px 24px; border-radius:6px; text-decoration:none; font-size:16px; font-weight:bold; display:inline-block;">
            Reset Password
          </a>
        </div>

        <p style="font-size:14px; color:#666;">
          This link will expire in <b>1 hour</b>. If you did not request a password reset, you can safely ignore this email.
        </p>
      </div>

      <!-- Footer -->
      <p style="font-size:12px; color:#999; margin-top:20px;">
        &copy; ${new Date().getFullYear()} Trainora.ai. All rights reserved.
      </p>
    </div>
  `,
});


  return res.json({ message: 'If that email exists, a reset link has been sent' });
});

/** RESET PASSWORD - verify token and set new password */
router.post('/reset-password',
  body('userId').notEmpty(),
  body('token').notEmpty(),
  body('password').isLength({ min: 8 }),
  async (req, res) => {
    const { userId, token, password } = req.body;
    const user = await User.findById(userId);
    if (!user || !user.resetPasswordTokenHash || !user.resetPasswordExpires) {
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    if (Date.now() > user.resetPasswordExpires) {
      return res.status(400).json({ message: 'Token expired' });
    }

    if (user.resetPasswordTokenHash !== hashToken(token)) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    // set new password, clear reset token, revoke refresh tokens
    await user.setPassword(password);
    user.resetPasswordTokenHash = undefined;
    user.resetPasswordExpires = undefined;
    user.refreshTokens = []; // force re-login everywhere
    
    await user.save();

    // optional: send confirmation email
   await sendEmail({
  to: user.email,
  subject: "Your password was changed - Trainora.ai",
  html: `
    <div style="font-family: Arial, sans-serif; background:#f9fafb; padding:20px; text-align:center;">

      <!-- Banner -->
      <div style="background:#0B1F3A; padding:40px; border-radius:8px;">
        <h1 style="color:#fff; margin:0;">Password Changed</h1>
      </div>

      <!-- Body -->
      <div style="background:#ffffff; margin-top:20px; padding:20px; border-radius:8px; box-shadow:0 2px 6px rgba(0,0,0,0.1); text-align:left;">
        <p style="font-size:16px; color:#333;">
          Hi <b>${user.name || "User"}</b>,
        </p>
        <p style="font-size:16px; color:#111;">
          This is a confirmation that your password has been successfully changed.
        </p>

        

       
      </div>

      <!-- Footer -->
      <p style="font-size:12px; color:#999; margin-top:20px;">
        &copy; ${new Date().getFullYear()} Trainora.ai. All rights reserved.
      </p>
    </div>
  `,
});


    return res.json({ message: 'Password updated' });
  }
);


router.post('/contact',async(req,res)=>{
   try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    return res.status(201).json({
      message: "Message received successfully!",
      contact,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
})




// Start Google login
// router.get("/auth/google", passport.authenticate("google", {
//   scope: ["profile", "email"], // Request profile and email permissions
// }));

// // Google callback route
// router.get(
//   "/auth/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "/login", // Redirect to login if authentication fails
//   }),
//   (req, res) => {
//     // Successful authentication, redirect to home or dashboard
//     res.redirect("/dashboard");
//   }
// );

// // Log out route
// router.get("/logout", (req, res) => {
//   req.logout((err) => {
//     if (err) {
//       return res.status(500).json({ message: "Failed to log out" });
//     }
//     res.redirect("/");
//   });
// });







module.exports = router;
