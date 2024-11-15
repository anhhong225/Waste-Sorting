const WasteCategory = require("../models/wasteCategory");

// Get all waste categories
exports.getCategories = (req, res) => {
  WasteCategory.find({}, (err, wasteCategories) => {
    if (err) res.send(err);
    res.json(wasteCategories);
  });
};

// Get a waste category by Id
exports.getACategory = (req, res) => {
  WasteCategory.findById(req.params.categoryId, (err, wasteCategory) => {
    if (err) res.send(err);
    res.json(wasteCategory);
  });
};

// Create a new waste category
exports.createCategory = (req, res) => {
  const newWasteCategory = new WasteCategory(req.body);
  newWasteCategory.save((err, wasteCategory) => {
    if (err) res.send(err);
    res.json(wasteCategory);
  });
};

// Update a waste category
exports.updateCategory = (req, res) => {
  WasteCategory.findOneAndUpdate(
    { _id: req.params.categoryId },
    req.body,
    { new: true },
    (err, wasteCategory) => {
      if (err) res.send(err);
      res.json(wasteCategory);
    }
  );
};

// Delete a waste category
exports.deleteCategory = (req, res) => {
  WasteCategory.deleteOne({ _id: req.params.categoryId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: "Waste category successfully deleted",
      categoryId: req.params.categoryId,
    });
  });
};
