const WasteItem = require("../models/wasteItem");
const WasteCategory = require("../models/wasteCategory");

// Get all waste items
exports.getItems = async (req, res, next) => {
  try {
    const wasteItems = await WasteItem.find({});
    res.json(wasteItems);
  } catch (err) {
    next(err); // Pass error to Express error handler
  }
};

// Get a waste item by Id
exports.getAItem = async (req, res, next) => {
  try {
    const wasteItem = await WasteItem.findById(req.params.itemId);
    if (!wasteItem) {
      return res.status(404).json({ message: "Waste item not found" });
    }
    res.json(wasteItem);
  } catch (err) {
    next(err); // Pass error to Express error handler
  }
};

// Create a new waste item
exports.createItem = async (req, res) => {
  try {
    // Get the category name from the request body
    const { category, name } = req.body;
    // Find the category by its name (you can adjust based on how the category is passed)
    const wasteCategory = await WasteCategory.findOne({ name: category.toLowerCase() });
    if (!wasteCategory) {
      return res.status(404).json({ message: "Waste category not found" });
    }
    // Create a new WasteItem and set the category to the ObjectId of the found category
    const newWasteItem = new WasteItem({
      name,
      category: wasteCategory._id, 
    });
    const savedItem = await newWasteItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: "Error creating waste item", error: err });
  }
};

// Update a waste item
exports.updateItem = async (req, res, next) => {
  try {
    const updatedWasteItem = await WasteItem.findOneAndUpdate(
      { _id: req.params.itemId },
      req.body,
      { new: true } // Return updated document
    );
    if (!updatedWasteItem) {
      return res.status(404).json({ message: "Waste item not found" });
    }
    res.json(updatedWasteItem);
  } catch (err) {
    next(err); // Pass error to Express error handler
  }
};

// Delete a waste item
exports.deleteItem = async (req, res, next) => {
  try {
    const result = await WasteItem.deleteOne({ _id: req.params.itemId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Waste item not found" });
    }
    res.json({
      message: "Waste item successfully deleted",
      itemId: req.params.itemId,
    });
  } catch (err) {
    next(err); // Pass error to Express error handler
  }
};
