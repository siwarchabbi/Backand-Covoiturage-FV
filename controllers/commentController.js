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

// Update Comment
const updateComment = asyncHandler(async (req, res) => {
    const commentId = req.params.commentId;
    const { content } = req.body;
  
    const comment = await Comment.findByIdAndUpdate(
      commentId,
      { content },
      { new: true }
    );
  
    if (!comment) {
      res.status(404).json({ error: "Comment not found" });
    } else {
      res.json(comment);
    }
  });
  
  // Delete Comment
  const deleteComment = asyncHandler(async (req, res) => {
    const commentId = req.params.commentId;
  
    const comment = await Comment.findByIdAndDelete(commentId);
  
    if (!comment) {
      res.status(404).json({ error: "Comment not found" });
    } else {
      res.json({ message: "Comment deleted successfully" });
    }
  });



  module.exports = { createComment, getCommentsByCar, updateComment, deleteComment };
