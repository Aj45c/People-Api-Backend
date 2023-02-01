//Dependencies!
const express = require('express');
const mongoose = require('mongoose');

//Initialize Express App
const app = express();

//Confiure App Settings
require('dotenv').config();

const { PORT, MONGODB_URL } = process.env;

mongoose.connect(MONGODB_URL);
mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (err) => console.log("Error with MongoDB: " + err.message))
//Middleware
//Mount Routes
app.get('/', (req, res) => {
    res.send("Hello! :)")
})
//Port
app.listen(PORT, () =>{
    console.log('Backend is up and running on port 4000')
})