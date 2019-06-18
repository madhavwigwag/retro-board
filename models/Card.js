const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  list: {
    type: mongoose.Schema.Types.ObjectId,
  },
  createdBy: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now()
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId }],
  dislikes: [{ type: mongoose.Schema.Types.ObjectId }],
});

module.exports = Card = mongoose.model('card', CardSchema);