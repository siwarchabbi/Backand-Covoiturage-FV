const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    
    
    
    departureDateTime: {
      type: Date,
      required: true,
    },
    departureLocation: {
      type: String,
      required: true,
    },
    destinationLocation: {
      type: String,
      required: true,
    },
    destinationDateTime: {
      type: Date,
      required: true,
    },
    seatPrice: {
      type: Number,
      required: true,
    }, 
    seatAvailable: {
      type: Number,
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("car", carSchema);
