const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { createProfile, getProfile, vistedBoard } = require("./controller/profile")


// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/', auth, getProfile);

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post('/', auth, createProfile)

// @route    GET api/boardVisted
// @desc     Add a visited board to users profile.
// @access   Private
router.put("/boardVisited", auth, vistedBoard)

module.exports = router;
