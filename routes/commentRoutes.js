const express = require("express");



const router = express.Router();
const { createComment, getCommentsByCar, updateComment, deleteComment } = require("../controllers/commentController");


router.post("/:carId", createComment);
router.get("/:carId", getCommentsByCar);
router.put("/:commentId", updateComment); 
router.delete("/:commentId", deleteComment); 

module.exports = router;
