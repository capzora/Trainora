require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const path = require('path');

const User = require("./models/user")


const leadRoutes = require('./routes/lead')
const authRoutes = require('./routes/auth');
const contactRoutes = require("./routes/contact");
const calltoAction = require("./routes/callToAction")
require("./config/passport")

const app = express();
app.use(cors({
  origin: "http://localhost:5173",  
  credentials: true,                
}));


app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.use(session({
  secret: 'your-session-secret',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// Google login route
app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'], // Request profile and email
}));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }), // Redirect to home on failure
  (req, res) => {
    // Successful login, redirect to dashboard or desired page
    res.redirect('/dashboard');
  }
);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error(' MongoDB connection error:', err));

// after DB connection



// routes
app.use('/auth', authRoutes);
app.use('/lead', leadRoutes);
app.use('/api',contactRoutes)
app.use('/api',calltoAction)
app.use('/brochures', express.static(path.join(__dirname, 'brochures')));
// const paymentRoutes = require('./routes/payment');
// app.use('/payments', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT,"0.0.0.0", () => console.log(`Listening ${PORT}`));


// ************** used for deleting tested users into db *************** 
// app.delete("/users", async (req, res) => {
//   try {
//     await User.deleteMany({});
//     res.json({ message: "All users deleted ✅" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

app.get('/', (req, res) => {
    res.send("hello");
});

