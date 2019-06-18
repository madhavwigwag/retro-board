const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    boards: [
        {
            boardName: { type: String },
            createdBy: { type: mongoose.Schema.Types.ObjectId },
            createdOn: { type: String },
            boardId: { type: mongoose.Schema.Types.ObjectId }
        }
    ]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
