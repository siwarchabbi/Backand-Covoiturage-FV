const express = require("express");
const {
  registerUser,
  currentUser,
  loginUser,
  putProfile,
  getProfile,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);
router.get("/profile/:userId", getProfile);
router.put("/update/:userId", putProfile);

module.exports = router;
