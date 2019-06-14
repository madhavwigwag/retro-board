const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  list: {
    type: mongoose.Schema.Types.ObjectId,
  },
  createdBy:{
    type: String
  },
  content: {
    type: String, 
    required: true
  },
  createdOn :{
    type: Date,
    default: Date.now()
  }
});

module.exports = Card = mongoose.model('card', CardSchema);