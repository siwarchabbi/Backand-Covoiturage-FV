const express = require("express");
const multer = require("multer");

const {
 createCar,  updateCar, deleteCar ,getCars, getCarById
} = require("../controllers/carController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
const upload = multer({ storage: storage });
const router = express.Router();

router.post("/", upload.single('image'), createCar);
router.get("/", getCars);
router.put("/:id", updateCar);
router.delete("/:id", deleteCar);
router.get("/:id", getCarById);

module.exports = router;
