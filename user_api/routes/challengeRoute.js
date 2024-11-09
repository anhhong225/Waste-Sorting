const challengeController = require("../controllers/challengeController");

module.exports = (app) => {
    app
        .route('/getWasteItems')
        .get(challengeController.getWasteItems);
    
    app
        .route('/submitAnswer')
        .post(challengeController.submitAnswer);
};