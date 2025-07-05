const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  try {
    const {name, email, password } = req.body;

    if (await User.findOne({ email })) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    // res.status(201).json({ message: 'Registered', token });
    res.status(201).json({
  message: 'Registered',
  token,
  user: {
    _id: user._id,
    name: user.name,
    email: user.email
  }
});

  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // res.json({ token, email: user.email });
    res.json({
  message: "Login successful",
  token,
  user: {
    _id: user._id,
    name: user.name,
    email: user.email
  }
});

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const protectedRoute = (req, res) => {
  res.json({ message: "You are authenticated", user: req.user });
};

module.exports = { register, login, protectedRoute };
