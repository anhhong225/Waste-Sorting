const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.wasteCategory = require('./waste_api/models/wasteCategory');
global.wasteItem = require('./waste_api/models/wasteItem');

// Routes
const wasteCategoryRoutes = require('./waste_api/routes/wasteCategorieRoute');
const wasteItemRoutes = require('./waste_api/routes/wasteItemRoute');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// const errorMiddleware = require('./api/middleware/errorMiddleware');
// const logger = require('./api/middleware/logger');

// Connect to MongoDB
// connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

wasteCategoryRoutes(app);
wasteItemRoutes(app);

// Start the server
app.use((req,res) => {
    req.statusCode(404).send({url: `${req.originalUrl} not found`});
});

app.listen(PORT, () => {
  console.log(`Waste API running on port ${PORT}`);
});