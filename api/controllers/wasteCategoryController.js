const wasteCategory = require('../models/wasteCategory');
const mongoose = requre('mongoose');

//get all waste categories
exports.getWasteCategories = (req,res) => {
    WasteCategory.find({}, (err, wasteCategories) => {
        if(err) res.send(err);
        res.json(wasteCategories);
    });
};
//Get a waste category by Id
exports.getWasteCategory = (req, res) => {
    WasteCategory.findById(req.params.categoryId, (err, wasteCategory) =>{
        if(err) res.send(err);
        res.json(wasteCategory);
    });
};