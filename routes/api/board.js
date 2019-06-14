const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { createBoard } = require("./controller/board");

// @route    POST api/board/
// @desc     Create a board for a user. 
// @access   Private
router.post('/', auth, createBoard);


module.exports = router;
