const mongoose = require("mongoose");


const FavorieSchema = mongoose.Schema(
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
     
      datecreation: {
        type: Date,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model("Favorie", FavorieSchema);
