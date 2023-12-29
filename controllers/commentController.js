const Comment = require("../models/commentModel");
const asyncHandler = require("express-async-handler");


 //POST
    //http://localhost:5000/api/comments/:carId"
   // POST - http://localhost:5000/api/comments/:carId
const createComment = asyncHandler(async (req, res) => {
    const { user, car, content } = req.body;

    // Set the current date and time
    const datecreation = new Date();

    const comment = await Comment.create({ user, car, content, datecreation });

    res.status(201).json(comment);
});


//get
    //http://localhost:5000/api/comments/:carId"

const getCommentsByCar = asyncHandler(async (req, res) => {
  const carId = req.params.carId;

  const comments = await Comment.find({ car: carId }).populate("user");

  res.json(comments);
});





module.exports = { createComment, getCommentsByCar };
