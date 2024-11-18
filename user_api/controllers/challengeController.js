// // const ChallengeService = require('../services/challengeService');

// // // Get waste items for sorting challenge
// // exports.getWasteItems = async (req, res) => {
// //     try {
// //         const items = await ChallengeService.getWasteItemsForChallenge();
// //         res.json({ items });
// //     } catch (error) {
// //         res.status(500).json({ message: error.message });
// //     }
// // };

// // // Submit answer and update score
// // exports.submitAnswer = async (req, res) => {
// //     const { userId, itemId, categoryId } = req.body;

// //     try {
// //         const result = await ChallengeService.submitAnswer(userId, itemId, categoryId);
// //         res.json(result);
// //     } catch (error) {
// //         res.status(500).json({ message: error.message });
// //     }
// // };

// // controllers/wasteController.js
// // const challengeModel = require('../models/challengeModel');
// const WasteCategory = require('../models/wasteCategorieSchema');


// // Get random waste items
// async function getRandomWasteItems(req, res) {
//     try {
//         const count = await WasteCategory.countDocuments(); // Get total count of documents
//         const randomIndex = Math.floor(Math.random() * count); // Generate a random index
//         const randomItem = await WasteCategory.findOne().skip(randomIndex); // Retrieve random item

//         res.json(randomItem);
//     } catch (error) {
//         res.status(500).json({ error: 'Error fetching random item' });
//     }
// }

// // Track user score
// let score = 0; // Global score variable

// // Check if the user’s category matches the correct category
// async function checkAnswer(req, res) {
//     const { item, category } = req.body; // Get user input from request body

//     try {
//         // Find the item in the database
//         const wasteItem = await WasteCategory.findOne({ item, category });

//         if (wasteItem) {
//             score += 1; // Correct answer, increase score
//             res.json({ message: 'Correct answer!', score });
//         } else {
//             score -= 1; // Incorrect answer, decrease score
//             res.json({ message: 'Incorrect answer.', score });
//         }
//     } catch (error) {
//         res.status(500).json({ error: 'Error checking answer' });
//     }
// }

// module.exports = {
//     getRandomWasteItems,
//     checkAnswer
// };
