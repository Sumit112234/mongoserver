
require('dotenv').config();
// import 'dotenv';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const meaningRoutes = require('./routes/meaningRoutes');
const cors = require('cors');
const dbConnect = require('./db/databaseConnection');
// import express from 'express';
// import bodyParser from 'body-parser';
// import router from './routes/meaningRoutes.js';
// import cors from 'cors';
// import dbConnect from './db/databaseConnection.js';




const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());  

// // Middleware
// app.use(express.json());

// MongoDB connection
dbConnect().then((result) => {
    if (result) {
        console.log('Database connected successfully');
    } else {
        console.log('Failed to connect to the database');
    }
});

// Routes
app.use('/api/meanings', meaningRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
