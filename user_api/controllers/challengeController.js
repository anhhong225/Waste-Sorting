// controllers/challengeController.js
const Challenge = require('../models/challenge');
const fetch = require('node-fetch');  // Import fetch for HTTP requests

const wasteApiUrl = process.env.WASTE_API_URL || 'http://waste_api:3002';  // Get waste_api URL from environment variable

// Get all challenges
exports.getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find({});
    res.json(challenges);
  } catch (err) {
    res.status(500).json({ message: "Error fetching challenges", error: err });
  }
};

// Get challenge by ID
exports.getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.challengeId);
    if (!challenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }
    res.json(challenge);
  } catch (err) {
    res.status(500).json({ message: "Error fetching challenge", error: err });
  }
};

// Create a new challenge
exports.createChallenge = async (req, res) => {
  try {
    const { description, difficultyLevel, wasteItemIds } = req.body;

    // Fetch waste items from waste_api with query parameters
    const response = await fetch(
      `${wasteApiUrl}/waste-item?ids=${wasteItemIds.join(',')}`
    );

    if (!response.ok) {
      return res.status(response.status).json({ message: "Error fetching waste items" });
    }

    const wasteItems = await response.json();
    if (wasteItems.length !== wasteItemIds.length) {
      return res.status(400).json({ message: "Some waste items not found" });
    }

    // Create the challenge with associated waste items
    const newChallenge = new Challenge({
      description,
      difficultyLevel,
      wasteItems: wasteItems.map(item => item._id), // Associate waste items by their IDs
    });

    const savedChallenge = await newChallenge.save();
    res.status(201).json(savedChallenge);
  } catch (err) {
    res.status(500).json({ message: "Error creating challenge", error: err.message });
  }
};


// Update a challenge
exports.updateChallenge = async (req, res) => {
  try {
    const updatedChallenge = await Challenge.findByIdAndUpdate(
      req.params.challengeId,
      req.body,
      { new: true }
    );
    if (!updatedChallenge) {
      return res.status(404).json({ message: "Challenge not found" });
    }
    res.json(updatedChallenge);
  } catch (err) {
    res.status(500).json({ message: "Error updating challenge", error: err });
  }
};

// Delete a challenge
exports.deleteChallenge = async (req, res) => {
  try {
    const result = await Challenge.deleteOne({ _id: req.params.challengeId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Challenge not found" });
    }
    res.json({ message: "Challenge successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting challenge", error: err });
  }
};
