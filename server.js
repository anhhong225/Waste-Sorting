require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const userRoutes = require('./routes/userRoute');
const wasteCategoryRoutes = require('./routes/wasteCategorieRoute');
const wasteItemRoutes = require('./routes/wasteItemRoute');
const challengeRoutes = require('./routes/chalengeRoute');
const errorMiddleware = require('./middleware/errorMiddleware');
const logger = require('./middleware/logger');

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