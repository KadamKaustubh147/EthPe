const express = require('express');
const router = express.Router();
const { register, login, protectedRoute } = require('../controllers/authControllers');
const protect = require('../middlewares/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/', protect, protectedRoute);

module.exports = router;
