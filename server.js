const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const wasteCategoryRoutes = require('./routes/wasteCategoryRoutes');
const wasteItemRoutes = require('./routes/wasteItemRoutes');
const challengeRoutes = require('./routes/challengeRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

// Route setup
app.use('/api/users', userRoutes);
app.use('/api/waste-categories', wasteCategoryRoutes);
app.use('/api/waste-items', wasteItemRoutes);
app.use('/api/challenges', challengeRoutes);

// Error handling middleware
app.use(errorMiddleware);

app.listen(PORT, () =>{
    console.log("Server is running on port 3000");
});