const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Board = require("../../models/Board");

router.post("/", auth, async (req, res) => {
    const { name, lists } = req.body;

    let board = new Board({
        name,
        lists
    })

    try {
        let board = await Board.findOne({ name });
        if (board) {
            return res
                .status(400)
                .json({ errors: [{ msg: 'Board with same name already exists' }] });
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
    await board.save();
    return res.json(board);
})

module.exports = router;
