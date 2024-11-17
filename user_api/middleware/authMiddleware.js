const jwt = require("jsonwebtoken");
const User = require('../models/user');
const SECRET_KEY = process.env.SECRET_KEY

const userAuthenticate = (req, res, next) => {
  try {
    // Check for the token in the authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(403).json({ message: 'No token provided.' });
    }

    // Token format: "Bearer <token>"
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(403).json({ message: 'Invalid token format.' });
    }

    // Verify the token
    const decoded = jwt.verify(token, SECRET_KEY);

    // Optionally, find the user in the database to verify they still exist
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Attach the user object to the request for further use in the route
    req.user = user;
    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    // Handle token verification errors (expired, invalid, etc.)
    return res.status(401).json({ message: 'Failed to authenticate token.', error: err.message });
  }
};

module.exports = userAuthenticate;