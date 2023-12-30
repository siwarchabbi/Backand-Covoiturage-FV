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
carSchema.virtual('imageUrl').get(function () {
  return `/uploads/${this.image}`;
});
module.exports = mongoose.model("car", carSchema);
