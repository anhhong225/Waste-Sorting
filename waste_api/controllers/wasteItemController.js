const WasteItem = require("../models/wasteItem"); 
// const mongoose = require("mongoose");

// Get all waste items
exports.getItems = (req, res) => {
  WasteItem.find({}, (err, wasteItems) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(wasteItems);
  });
};

// Get a waste item by Id
exports.getAItem = (req, res) => {
  WasteItem.findById(req.params.itemId, (err, wasteItem) => {
    if (err) {
      return res.status(500).send(err); // Handling server error
    }
    if (!wasteItem) {
      return res.status(404).json({ message: "Waste item not found" }); // If the item is not found
    }
    res.json(wasteItem);
  });
};

// Create a new waste item
exports.createItem = (req, res) => {
  const newWasteItem = new WasteItem(req.body);
  newWasteItem.save((err, wasteItem) => {
    if (err) {
      return res.status(500).send(err); // Handling server error
    }
    res.status(201).json(wasteItem); // Send back created item with status 201
  });
};

// Update a waste item
exports.updateItem = (req, res) => {
  WasteItem.findOneAndUpdate(
    { _id: req.params.itemId },
    req.body,
    { new: true }, // Return the updated document
    (err, wasteItem) => {
      if (err) {
        return res.status(500).send(err); // Handling server error
      }
      if (!wasteItem) {
        return res.status(404).json({ message: "Waste item not found" }); // If item is not found
      }
      res.json(wasteItem);
    }
  );
};

// Delete a waste item
exports.deleteItem = (req, res) => {
  WasteItem.deleteOne({ _id: req.params.itemId }, (err) => {
    if (err) {
      return res.status(500).send(err); // Handling server error
    }
    res.json({
      message: "Waste item successfully deleted",
      itemId: req.params.itemId,
    });
  });
};
