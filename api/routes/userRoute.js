const express = require("express");
const router  = require("router");
const userController = require("../controllers/userController");

router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserById);
router.post('/create', userController.createUser);
router.put('/update/:userId', userController.updateUser);
router.delete('/delete/:userId', userController.deleteUser);

module.exports = router;