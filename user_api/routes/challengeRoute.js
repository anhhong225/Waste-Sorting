// const challengeController = require("../controllers/challengeController");
// const userAuthenticate = require("../middleware/userMiddleware");

// module.exports = (app) => {
//     app
//         .route('/getWasteItems')
//         .get(userAuthenticate, challengeController.getWasteItems);

//     app
//         .route('/submitAnswer')
//         .post(userAuthenticate, challengeController.submitAnswer);

//     app
//         .route('/getWasteItems')// get random item
//         .get(userAuthenticate, challengeController.getWasteItems);
// };

// routes/wasteRoutes.js
// const express = require('express');
const challengeController = require('../controllers/challengeController');

module.exports = app => {
    app
        .route('/random-item')
        .get(challengeController.getRandomWasteItems);

    app
        .route('/check-answer')
        .post(challengeController.checkAnswer);
};
