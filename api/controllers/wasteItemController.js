const wasteItem = require('../models/wasteItem');
const mongoose = require('mongoose');

//get all waste categories
exports.getItems = (req,res) => {
    WasteItem.find({}, (err, wasteItems) => {
        if(err) res.send(err);
        res.json(wasteItems);
    });
};
//Get a waste category by Id
exports.getAItem = (req, res) => {
    WasteItem.findById(req.params.itemId, (err, wasteItem) =>{
        if(err) res.send(err);
        res.json(wasteItem);
    });
};
// Create a new waste category
exports.createItem = (req, res) => {
    const newWasteItem = new WasteItem(req.body);
    newWasteItem.save((err, wasteItem) => {
        if (err) res.send(err);
        res.json(wasteItem);
    });
};

// Update a waste category
exports.updateItem = (req, res) => {
    WasteItem.findOneAndUpdate(
        { _id: req.params.itemId },
        req.body,
        { new: true },
        (err, wasteItem) => {
            if (err) res.send(err);
            res.json(wasteItem);
        }
    );
};

// Delete a waste category
exports.deleteItem = (req, res) => {
    WasteItem.deleteOne({ _id: req.params.itemId }, err => {
        if (err) res.send(err);
        res.json({
            message: 'Waste item successfully deleted',
            itemId: req.params.itemId
        });
    });
};