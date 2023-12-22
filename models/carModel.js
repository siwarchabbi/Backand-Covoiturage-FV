const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    
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
    seatPrice: {
      type: Number,
      required: true,
    }, 
    seatAvailable: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    matricule: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['confirmed', 'cancelled', 'pending'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("car", carSchema);
