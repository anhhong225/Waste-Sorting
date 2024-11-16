const Challenge = require('../models/challenge');
const User = require('../models/user');

class ChallengeService {
  // Fetch waste items (challenges) for the sorting game
  static async getWasteItemsForChallenge() {
    try {
      // Retrieve all challenges from the database
      const challenges = await Challenge.find({});
      return challenges;
    } catch (error) {
      throw new Error(`Error fetching challenges: ${error.message}`);
    }
  }

  // Validate user's answer and update their score
  static async submitAnswer(userId, itemId, categoryId) {
    try {
      // Fetch the challenge item by ID
      const challenge = await Challenge.findById(itemId);
      if (!challenge) {
        throw new Error('Challenge item not found.');
      }

      // Simulate answer validation (e.g., compare categoryId to some logic)
      const isCorrect = categoryId === 'recycling'; // Example logic
      const scoreIncrement = isCorrect ? 10 : 0; // Add points for correct answers

      // Update the user's score
      const user = await User.findById(userId);
      if (!user) {
        throw new Error('User not found.');
      }
      user.scores += scoreIncrement;
      await user.save();

      // Return feedback
      return {
        message: isCorrect ? 'Correct answer!' : 'Wrong answer!',
        currentScore: user.scores,
      };
    } catch (error) {
      throw new Error(`Error submitting answer: ${error.message}`);
    }
  }
}

module.exports = ChallengeService;
