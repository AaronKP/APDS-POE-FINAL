const express = require('express');
const app = express();
const urlprefix = '/api';

// Import routes for posts and users
const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

// Database setup for MongoDB
const mongoose = require('mongoose');
const Post = require('./models/post');
const fs = require('fs');
const cert = fs.readFileSync('keys/certificate.pem');
const options = {
    server: { sslCA: cert }
};
const connstring = 'mongodb+srv://st10090758:Themroom46@cluster0.hpd3rif.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connstring)
    .then(() => {
        console.log('Connected :-)'); 
    })
    .catch(() => {
        console.log('Not connected :-(');
    }, options);

// Middleware for JSON parsing
app.use(express.json());

// Allow frontend to call the backend without cross-origin restrictions
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

// Route for a basic API test
app.get(urlprefix + '/', (req, res) => {
    res.send('Hello world');
});

// Routes for handling posts and users
app.use(urlprefix + '/posts', postRoutes);
app.use(urlprefix + '/users', userRoutes);

module.exports = app;
