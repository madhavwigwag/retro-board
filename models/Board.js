const mongoose = require('mongoose');
const BoardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    lists: [
        { name: String }
    ],
    createdOn: {
        type: Date,
        default: Date.now()
    },
    visitors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ]
});



module.exports = Board = mongoose.model('board', BoardSchema);