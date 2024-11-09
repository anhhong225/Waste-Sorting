require('dotenv').config();
const express = require('express');
const connectDB = require('./api/config/connectDB');
const userRoutes = require('./api/routes/userRoute');
const wasteCategoryRoutes = require('./api/routes/wasteCategorieRoute');
const wasteItemRoutes = require('./api/routes/wasteItemRoute');
const challengeRoutes = require('./api/routes/chalengeRoute');
const errorMiddleware = require('./api/middleware/errorMiddleware');
const logger = require('./api/middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

app.use(express.static('views'));
// Request logging middleware
// app.use(logger);

// // Route setup
// app.use('/api/users', userRoutes);
// app.use('/api/waste-categories', wasteCategoryRoutes);
// app.use('/api/waste-items', wasteItemRoutes);
// app.use('/api/challenges', challengeRoutes);

// Error handling middleware
// app.use(errorMiddleware);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});