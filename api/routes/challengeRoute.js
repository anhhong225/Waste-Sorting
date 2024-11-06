const express = require("express");
const router  = require("router");
const challengeController = require("../controllers/challengeController");

router.get("/", challengeController.getChallenges)
router.get("/:challengeId", challengeController.getChallengeById)
router.post("/update/:challengeId", challengeController.updateChallenge)
router.delete("/delete/challengeId", challengeController.deleteChallenge)

module.exports = router;