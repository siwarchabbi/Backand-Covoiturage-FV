const express = require("express");
const {
 createCar, getCar, updateCar, deleteCar ,getCars
} = require("../controllers/carController");


const router = express.Router();

router.post("/", createCar);
router.get("/",getCars);
router.put("/:id",updateCar);
router.delete("/:id",deleteCar);
router.get("/:id",getCar);

module.exports = router;
