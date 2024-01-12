
const Favorie = require("../models/favorieModel");
const asyncHandler = require("express-async-handler");

// Add a car to the list of favorites for a user
const addFavorite = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const carId = req.params.carId;

  const favorie = await Favorie.create({
    user: userId,
    car: carId,
    datecreation: new Date(),
  });

  res.status(201).json(favorie);
});

// Get the list of favorites for a user
const getFavorites = asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  const favorites = await Favorie.find({ user: userId }).populate("car");

  res.json(favorites);
});

// Remove a car from the list of favorites for a user
const removeFavorite = asyncHandler(async (req, res) => {
  const favorieId = req.params.favorieId;

  const favorie = await Favorie.findByIdAndDelete(favorieId);

  if (!favorie) {
    res.status(404).json({ error: "Favorite not found" });
  } else {
    res.json({ message: "Favorite removed successfully" });
  }
});

module.exports = { addFavorite, getFavorites, removeFavorite };
