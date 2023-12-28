const express = require("express");
const {
 createCar,  updateCar, deleteCar ,getCars, getCarById
} = require("../controllers/carController");


const router = express.Router();

router.post("/", createCar);
router.get("/",getCars);
router.put("/:id",updateCar);
router.delete("/:id",deleteCar);
router.get("/:id",getCarById);

module.exports = router;
