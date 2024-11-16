// services/userService.js

const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = "admin1"; // Matches authMiddleware.js

// Fetch all users
exports.getAllUsers = async () => {
    try {
        return await User.find({});
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
};

// Fetch a user by ID
exports.getUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) throw new Error('User not found');
        return user;
    } catch (error) {
        throw new Error('Error fetching user: ' + error.message);
    }
};

// Create a new user
exports.createUser = async (userData) => {
    const { email, password, name } = userData;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) throw new Error('Email already in use');

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            email,
            password: hashedPassword,
            name
        });
        return await newUser.save();
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};

// Update an existing user
exports.updateUser = async (userId, updateData) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
        if (!updatedUser) throw new Error('User not found');
        return updatedUser;
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
};

// Delete a user
exports.deleteUser = async (userId) => {
    try {
        const result = await User.findByIdAndDelete(userId);
        if (!result) throw new Error('User not found');
        return { message: 'User successfully deleted', userId };
    } catch (error) {
        throw new Error('Error deleting user: ' + error.message);
    }
};

// Authenticate a user during login
exports.loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) throw new Error('Invalid password');

        const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });
        return { message: 'Login successful', token };
    } catch (error) {
        throw new Error('Error during login: ' + error.message);
    }
};
