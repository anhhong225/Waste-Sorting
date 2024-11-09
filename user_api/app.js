const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.User = require('./user_api/models/user');
global.Challenge = require('./user_api/models/challenge');

// Routes
const userRoutes = require('./user_api/routes/userRoute');
const challengeRoutes = require('./user_api/routes/challengeRoute');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// const errorMiddleware = require('./api/middleware/errorMiddleware');
// const logger = require('./api/middleware/logger');

// Connect to MongoDB
// connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

userRoutes(app);
challengeRoutes(app);

// Start the server
app.use((req,res) => {
    req.statusCode(404).send({url: `${req.originalUrl} not found`});
});

app.listen(PORT, () => {
  console.log(`User API running on port ${PORT}`);
});