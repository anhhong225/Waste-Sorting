const challengeController = require("../controllers/challengeController");
const verifyAut = require("../middleware/authMiddleware");

module.exports = app => {
  app.route("/challenges")
    .get(verifyAut, challengeController.getChallenges)
    .post(verifyAut, challengeController.createChallenge);

  app.route("/challenges/:challengeId")
    .get(verifyAut, challengeController.getChallengeById)
    .put(verifyAut, challengeController.updateChallenge)
    .delete(verifyAut, challengeController.deleteChallenge);
};
