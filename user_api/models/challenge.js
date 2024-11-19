const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  difficultyLevel: {
    type: String,
    required: true,
    enum: ["easy", "medium", "hard"],  // Adjust based on your difficulty levels
  },
  wasteItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "WasteItem",
    required: true,
  }],
}, { timestamps: true });

module.exports = mongoose.model("Challenge", challengeSchema);
