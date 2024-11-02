const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('User registration');
});

app.listen(port, () =>{
    console.log("Server is running on port 3000");
});