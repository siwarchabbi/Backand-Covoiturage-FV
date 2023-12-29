const mongoose = require("mongoose");


const CommentSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      car: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "car",
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      datecreation: {
        type: Date,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model("comment", CommentSchema);
