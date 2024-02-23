const express = require("express");
const multer = require("multer");

const {
  createCar,
  updateCar,
  deleteCar,
  getCars,
  getCarById,
  getCarsByUserId, // Import the new controller function
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
router.get("/:id", getCarById);
router.get("/user/:userId", getCarsByUserId);
router.put("/:id", upload.single('image'), updateCar);
router.delete("/:id", deleteCar);

module.exports = router;
