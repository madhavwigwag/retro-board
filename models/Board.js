const mongoose = require('mongoose');
const BoardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lists: [{
        name: {
            type: String,
            required: true
        },
        cards: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "card"
        }]

    }]
});

module.exports = Board = mongoose.model('board', BoardSchema);
