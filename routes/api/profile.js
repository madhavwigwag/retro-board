const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { createProfile, getProfile } = require("./controller/profile")


// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/', auth, getProfile);

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post('/', auth, createProfile)

module.exports = router;
