const challengeController = require("../controllers/challengeController");

module.exports = app => {
    app
        .route('/challenges') 
        .get(challengeController.getChallenges) 
        // .post(challengeController.createChallenge); 
    app
        .route('/challenge/:challengeId')
        .get(challengeController.getAChallenge) 
        .put(challengeController.updateChallenge) 
        .delete(challengeController.deleteChallenge); 
};