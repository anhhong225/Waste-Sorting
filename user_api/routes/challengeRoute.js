const challengeController = require("../controllers/challengeController");

module.exports = app => {
  app.route("/challenges")
    .get(challengeController.getChallenges)
    .post(challengeController.createChallenge);

  app.route("/challenges/:challengeId")
    .get(challengeController.getChallengeById)
    .put(challengeController.updateChallenge)
    .delete(challengeController.deleteChallenge);
};
