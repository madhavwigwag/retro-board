const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Card = require("../../models/Card");

router.post("/", auth, async (req, res) => {
    const { user, text, likes, dislikes, comments } = req.body;

    console.log(user, text, likes, dislikes, comments )

    let board = new Card(user, text, likes, dislikes, comments)
   
    return res.json(card);
})

module.exports = router;
