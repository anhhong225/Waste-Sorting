const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.User = require('./api/models/user');
global.wasteCategory = require('./api/models/wasteCategory');
global.wasteItem = require('./api/models/wasteItem');
global.Challenge = require('./api/models/challenge');

// Routes
const userRoutes = require('./api/routes/userRoute');
const wasteCategoryRoutes = require('./api/routes/wasteCategorieRoute');
const wasteItemRoutes = require('./api/routes/wasteItemRoute');
const challengeRoutes = require('./api/routes/challengeRoute');

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb+srv://heoshan:Gemini2205@waste-sorting.iibpb.mongodb.net/?retryWrites=true&w=majority&appName=Waste-Sorting'
);

// const errorMiddleware = require('./api/middleware/errorMiddleware');
// const logger = require('./api/middleware/logger');

// Connect to MongoDB
// connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

userRoutes(app);
wasteCategoryRoutes(app);
wasteItemRoutes(app);
challengeRoutes(app);

// Start the server
app.listen(PORT);
app.use((req,res) => {
    req.statusCode(404).send({url: `${req.originalUrl} not found`});
});
console.log(`Server started on: ' + ${PORT}`);