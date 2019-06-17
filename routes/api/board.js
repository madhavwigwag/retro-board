const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { createBoard, getBoardDetailsById } = require("./controller/board");

// @route    POST api/board/
// @desc     Create a board for a user. 
// @access   Private
router.post('/', auth, createBoard);


// @route    GET api/board/:boardId
// @desc     Get board details by ID
// @access   Private
router.get('/:boardId', auth, getBoardDetailsById);

module.exports = router;
