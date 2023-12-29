require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDb = require('./config/dbConnection');
const errorHandler = require('./middleware/errorHandler');
const cors = require('cors'); // Import the cors middleware

mongoose.set('strictQuery', false);

connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Use cors middleware to enable Cross-Origin Resource Sharing
app.use(express.json());

app.use('/api/car/api/comments', require('./routes/commentRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/car', require('./routes/carRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
