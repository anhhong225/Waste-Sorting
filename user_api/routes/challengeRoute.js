const challengeController = require("../controllers/challengeController");
const userAuthenticate = require("../middleware/userMiddleware");

module.exports = (app) => {
    app
        .route('/getWasteItems')
        .get(userAuthenticate, challengeController.getWasteItems);

    app
        .route('/submitAnswer')
        .post(userAuthenticate, challengeController.submitAnswer);
};

