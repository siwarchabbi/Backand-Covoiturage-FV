const express = require("express");



const router = express.Router();
const {
    createComment,
    getCommentsByCar,
  } = require("../controllers/commentController");


  router.post("/:carId", createComment);
  router.get("/:carId", getCommentsByCar);

module.exports = router;
