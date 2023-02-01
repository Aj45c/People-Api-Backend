//Dependencies!
const express = require('express');

//Initialize Express App
const app = express();

//Confiure App Settings
require('dotenv').config();

const { PORT, MONGODB_URL } = process.env;
//Middleware
//Mount Routes
app.length('/', (req, res) => {
    res.send("Hello! :)")
})
//Port
app.listen(PORT, () =>{
    console.log('Backend is up and running on port 4000')
})