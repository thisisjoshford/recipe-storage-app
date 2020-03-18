const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  recipeId: {
    type: String,
    required: true
  },
  dateOfEvent: {
    type: Date,
    required: true
  },
  notes: {
    type: String,
  },
  rating: {
    type: String,
  }
});

module.exports = mongoose.model('Event', schema);
