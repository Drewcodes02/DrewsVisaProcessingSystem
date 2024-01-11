const express = require('express');
const passport = require('passport');
const { check } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', [
  check('username', 'Username is required').not().isEmpty(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
], authController.register);

router.post('/login', passport.authenticate('local', { session: false }), authController.login);

module.exports = router;
