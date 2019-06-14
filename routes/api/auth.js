const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const { check } = require('express-validator/check');


const { getToken, authenticateUserAndGetToken } = require("./controller/auth")

// @route    GET api/auth
// @desc     Get Token route
// @access   Public
router.get('/', auth, getToken);

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  authenticateUserAndGetToken
);

module.exports = router;
