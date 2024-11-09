const challenge = require("../models/challenge");

exports.getChallenges = (req, res) => {
  challenge.find({}, (err, challenges) => {
    if (err) res.status(500).send(err);
    res.status(200).json(challenges);
  });
};

exports.getAChallenge = (req, res) => {
  challenge.findById(req.params.challengeId, (err, challenge) => {
    if (err) res.status(500).send(err);
    res.status(200).json(challenge);
  });
};

exports.updateChallenge = (req,res) => {
    challenge.findByIdAndUpdate(req.params.challengeId, req.body, {new: true}, (err, challenge) => {
        if(err) res.status(500).send(err);
        res.status(200).send(challenge)
    })
}

exports.deleteChallenge = (req, res) => {
    Challenge.findByIdAndDelete(req.params.challengeId, (err) => {
        if (err) res.status(500).send(err);
        res.status(200).json({ message: 'Challenge successfully deleted' });
    });
};