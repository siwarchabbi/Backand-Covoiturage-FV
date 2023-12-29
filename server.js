require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require('cors');

mongoose.set('strictQuery', false);

connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Configure CORS to allow requests from http://localhost:4200
app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/car", require("./routes/carRoutes"));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
