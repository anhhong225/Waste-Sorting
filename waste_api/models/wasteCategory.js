const mongoose = require('mongoose');

const wasteCategorieSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['Plastic', 'Organic', 'Metal', 'Glass'], // Example difficulty levels
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('WasteCategory', wasteCategorieSchema);

