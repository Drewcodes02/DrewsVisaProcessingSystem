const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
require('./config/passport');

// Setup MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Import routes
const authRoutes = require('./routes/authRoutes');
const visaRoutes = require('./routes/visaRoutes');

// Apply middleware
app.use(express.json());
app.use(passport.initialize());

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/visa', visaRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
