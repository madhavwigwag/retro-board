const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');


const { createCard } = require("./controller/card");

router.post("/", auth, createCard);

module.exports = router;
