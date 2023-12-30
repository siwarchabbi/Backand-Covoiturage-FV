
require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');


mongoose.set('strictQuery', false);

connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/car" , require("./routes/carRoutes"));

app.use(errorHandler);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
