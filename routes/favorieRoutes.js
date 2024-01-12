
const express = require("express");
const router = express.Router();
const { addFavorite, getFavorites, removeFavorite } = require("../controllers/favorieController");

router.post("/:userId/:carId", addFavorite);

router.get("/:userId", getFavorites);

router.delete("/:favorieId", removeFavorite);

module.exports = router;
