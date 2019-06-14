const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    board: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        type: String
    },
    cards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "card"
    }]
});

module.exports = List = mongoose.model('list', ListSchema);