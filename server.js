require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require('cors');
const bodyParser = require('body-parser');
mongoose.set('strictQuery', false);

const path = require('path'); // Add this line to fix the issue

connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Use cors middleware to enable Cross-Origin Resource Sharing
app.use(express.json());

app.use('/api/car/api/comments', require('./routes/commentRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/car', require('./routes/carRoutes'));

app.use(errorHandler);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
