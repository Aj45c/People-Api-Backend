//Dependencies!
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');


//Initialize Express App
const app = express();

//Confiure App Settings
require('dotenv').config();

const { PORT, MONGODB_URL } = process.env;

mongoose.connect(MONGODB_URL);
mongoose.connection
.on('connected', () => console.log('Connected to MongoDB'))
.on('error', (err) => console.log("Error with MongoDB: " + err.message))

//Model
const peopleSchema = new mongoose.Schema({
    name:String,
    image:String,
    title:String
}, {timestamps: true});

const People = mongoose.model('People', peopleSchema);

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

//Mount Routes
app.get('/', (req, res) => {
    res.send("Hello! :)")
})
//Port
app.listen(PORT, () =>{
    console.log('Backend is up and running on port 4000')
})