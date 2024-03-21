const express = require("express");

const {
 createCar,  updateCar, deleteCar ,getCars, getCarById,getCarsByUserId
} = require("../controllers/carController");


const router = express.Router();

router.post("/", createCar);
router.get("/", getCars);
router.get("/user/:userId", getCarsByUserId);
router.put("/:id",  updateCar);
router.delete("/:id", deleteCar);
router.get("/:id", getCarById);

module.exports = router;
