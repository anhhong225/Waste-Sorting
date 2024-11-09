const WasteItem = require('../models/wasteItem');
const WasteCategory = require('../models/wasteCategory');
const User = require('../models/user');

class ChallengeService {
    /**
     * Get a list of waste items for the sorting challenge.
     * @param {number} itemCount - Number of items to retrieve.
     * @returns {Promise<Array>} - Array of waste items.
     */
    async getWasteItemsForChallenge(itemCount = 5) {
        try {
            // Retrieve random waste items
            const items = await WasteItem.aggregate([{ $sample: { size: itemCount } }]);
            return items;
        } catch (error) {
            throw new Error('Failed to retrieve waste items for the challenge.');
        }
    }

    /**
     * Check if the user's answer is correct and update the score if it is.
     * @param {string} userId - ID of the user.
     * @param {string} itemId - ID of the waste item being sorted.
     * @param {string} categoryId - ID of the waste category selected by the user.
     * @returns {Promise<Object>} - Updated user profile with the new score.
     */
    async submitAnswer(userId, itemId, categoryId) {
        try {
            const item = await WasteItem.findById(itemId);
            if (!item) throw new Error('Waste item not found');

            // Check if the chosen category matches the item's category
            const isCorrect = item.categoryId.toString() === categoryId;
            let scoreDelta = 0;

            if (isCorrect) {
                scoreDelta = 10; // Award points for a correct answer
            } else {
                scoreDelta = -5; // Deduct points for an incorrect answer
            }

            // Update the user's score
            const user = await User.findByIdAndUpdate(
                userId,
                { $inc: { scores: scoreDelta } },
                { new: true }
            );

            return { user, isCorrect, scoreDelta };
        } catch (error) {
            throw new Error('Failed to submit answer.');
        }
    }
}

module.exports = new ChallengeService();