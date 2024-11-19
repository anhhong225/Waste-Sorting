// models/Challenge.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Định nghĩa schema cho Challenge
const challengeSchema = new Schema(
    {
        description: {
            type: String,
            required: true,
            trim: true,
        },
        difficultyLevel: {
            type: String,
            enum: ['Easy', 'Medium', 'Hard'], // Các mức độ khó có thể là Easy, Medium, hoặc Hard
            required: true,
        },
        scoringCriteria: {
            type: String,
            required: true,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now, // Lưu ngày tạo thử thách
        },
    },
    { timestamps: true } // Tự động thêm các trường createdAt và updatedAt
);


module.exports = mongoose.model('Challenge', challengeSchema);