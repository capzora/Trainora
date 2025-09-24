const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const RefreshTokenSchema = new mongoose.Schema({
  tokenHash: String,
  createdAt: { type: Date, default: Date.now },
  expiresAt: Date
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true },  // ✅ add phone number

  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['student','admin','mentor'], default: 'student' },
  isEmailVerified: { type: Boolean, default: false },

  // password reset
  resetPasswordTokenHash: String,
  resetPasswordExpires: Date,

  // stored hashed refresh tokens (for rotation/revoke)
  refreshTokens: [RefreshTokenSchema]
}, { timestamps: true });

// helpers
userSchema.methods.setPassword = async function(password) {
  const rounds = parseInt(process.env.BCRYPT_ROUNDS || 12, 10);
  this.passwordHash = await bcrypt.hash(password, rounds);
};

userSchema.methods.validatePassword = async function(password) {
  return bcrypt.compare(password, this.passwordHash);
};

module.exports = mongoose.model('User', userSchema);
