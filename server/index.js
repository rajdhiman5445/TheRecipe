const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RecipeModel = require('./models/Recipes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
//mongoose.connect("mongodb+srv://rajdhiman:5445@cluster0.hpt4drz.mongodb.net/?retryWrites=true&w=majority");
mongoose.connect("mongodb+srv://rajdhiman:5445@cluster0.hpt4drz.mongodb.net/Recipes?retryWrites=true&w=majority");

// Listen for the 'connected' event
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Listen for the 'error' event
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Listen for the 'disconnected' event
mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

app.get('/recipeInfo', (req, res) => {
  RecipeModel.find()
  .then(recipes => res.json(recipes))
  .catch(err => res.json(err))
  })

app.listen(3001, () => {
  console.log("Server is running");
});
