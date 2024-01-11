const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { validationResult } = require('express-validator');

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { username, password } = req.body;
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'Username already exists' }] });
    }
    user = new User({ username, password, role: 'administrator' });
    await user.save();
    const payload = { id: user.id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 36000 });
    
    res.json({ token: `Bearer ${token}` });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const user = req.user;
  const payload = { id: user.id, role: user.role };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 36000 });
  res.json({ token: `Bearer ${token}` });
};
