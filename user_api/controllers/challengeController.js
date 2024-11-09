const ChallengeService = require('../services/challengeService');

// Get waste items for sorting challenge
exports.getWasteItems = async (req, res) => {
    try {
        const items = await ChallengeService.getWasteItemsForChallenge();
        res.json({ items });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Submit answer and update score
exports.submitAnswer = async (req, res) => {
    const { userId, itemId, categoryId } = req.body;

    try {
        const result = await ChallengeService.submitAnswer(userId, itemId, categoryId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};