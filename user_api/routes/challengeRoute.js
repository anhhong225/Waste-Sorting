const challengeController = require('../controllers/challengeController');

module.exports = (app) => {
    app
        .route('/challenges')
        .get(challengeController.getAllChallenges) // Fetch all challenges
        .post(challengeController.createChallenge); // Create a new challenge

    app
        .route('/challenges/:id')
        .get(challengeController.getChallengeById) // Fetch a specific challenge by ID
        .put(challengeController.updateChallenge) // Update a challenge by ID
        .delete(challengeController.deleteChallenge); // Delete a challenge by ID
};
