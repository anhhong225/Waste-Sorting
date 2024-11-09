const User = require('../models/user');
const mongoose = require('mongoose');
//Get all users
exports.getUsers = (req, res) => {
    User.find({}, (err, users) => {
        if(err) res.send(err);
        res.json(users)
    });
};
//Get all user by id
exports.getUserById = (req, res) => {
    User.findById(req.params.userId, (err, user) => {
        if (err) res.send(err);
        res.json(user);
    }); 
};
//Create a user
exports.createUser = async (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
        if(err) res.send(err);
        res.json(user);
    });
};
//update a user
exports.updateUser = (req,res) => {
    User.findOneAndUpdate(
        { user_id: req.params.userId},
        req.body,
        {new: true},
        (err, user) => {
            if(err) res.send(err);
            res.json(user);
        }
    );
};
//delete a user
exports.deleteUser = (req,res) => {
    User.deleteOne({user_id: req.params.userId}, err => {
        if(err) res.send(err);
        res.json({
            message: 'User successfully deleted',
            user_id: req.params.userId
        });
    });
};