const express = require("express");
const {
 createCar, getCar, updateCar, deleteCar ,getCars
} = require("../controllers/carController");


const router = express.Router();

router.post("/", createCar);
router.get("/",getCars);
router.put("/:CarID",updateCar);
router.delete("/:CarID",deleteCar);
router.get("/:CarID",getCar);

module.exports = router;
