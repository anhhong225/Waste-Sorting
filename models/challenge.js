const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  difficultyLevel: {
    type: String,
    enum: ['easy', 'medium', 'hard'], // Example difficulty levels
    required: true,
  },
  scoringCriteria: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Challenge', challengeSchema);