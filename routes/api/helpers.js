const mongoose = require("mongoose");

const confirmMongooseIdValidity = (id) => mongoose.Types.ObjectId.isValid(id);

module.exports = {
    confirmMongooseIdValidity
}