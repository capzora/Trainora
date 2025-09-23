require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const User = require("./models/user")


const leadRoutes = require('./routes/lead')
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors({
  origin: "http://localhost:5173",  
  credentials: true,                
}));


app.use(express.json());
app.use(cookieParser());
app.use(helmet());



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

