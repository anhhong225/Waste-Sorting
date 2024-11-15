require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.User = require('./models/user');
global.Challenge = require('./models/challenge');

// Routes
const userRoutes = require('./routes/userRoute');
// const challengeRoutes = require('./routes/challengeRoute');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://heoshan:Gemini2205@waste-sorting.iibpb.mongodb.net/?retryWrites=true&w=majority&appName=Waste-Sorting');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

userRoutes(app);
// challengeRoutes(app);

// Start the server
app.use((req, res) => {
  req.statusCode(404).send({ url: `${req.originalUrl} not found` });
});

app.listen(PORT, () => {
  console.log(`User API running on port ${PORT}`);
});