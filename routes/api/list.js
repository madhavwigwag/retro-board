const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');


const { getList } = require("./controller/list");

router.get("/:listid", auth, getList);


module.exports = router;
