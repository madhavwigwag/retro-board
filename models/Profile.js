const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    boards: [
        {
            boardName: { type: String },
            createdBy: { type: String },
            createdOn: { type: Date }
        }
    ]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
