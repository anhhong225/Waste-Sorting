const userController = require("../controllers/userController");

module.exports = app => {
    app
        .route('/users') // Endpoint: /users, Methods: GET, POST
        .get(userController.getUsers) // Get all users
        .post(userController.createUser); // Create a new user

    app
        .route('/users/:userId') // Endpoint: /users/:userId, Methods: GET, PUT, DELETE
        .get(userController.getUserById) // Get a user by ID
        .put(userController.updateUser) // Update a user by ID
        .delete(userController.deleteUser); // Delete a user by ID

    app.post('/register', userController.createUser);
    app.post('/login', userController.login);
};
