const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  list:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "list"
  },
  user: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  likes: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  }],
  dislikes: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  }],
  comments: [
    {
      user: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      likes: [{
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users"
        }
      }],
      dislikes: [{
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users"
        }
      }]
    }
  ]

});

module.exports = Card = mongoose.model('card', CardSchema);
