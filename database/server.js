// database/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const meaningRoutes = require('./routes/meaningRoutes');
// const { MongoClient } = require('mongodb');
// const client = new MongoClient(process.env.MONGO_URI);
const cors = require('cors');
const dbConnect = require('./db/databaseConnection');



const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());  

// // Middleware
// app.use(express.json());

// MongoDB connection
// dbConnect().then((result) => {
//     if (result) {
//         console.log('Database connected successfully');
//     } else {
//         console.log('Failed to connect to the database');
//     }
// });

// Routes
app.use('/api/meanings', meaningRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
