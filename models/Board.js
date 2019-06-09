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
        }
    }]
});

module.exports = Board = mongoose.model('board', BoardSchema);
