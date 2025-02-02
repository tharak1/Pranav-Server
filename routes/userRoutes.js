const express = require("express");
const { registerUser, loginUser, validateUser, currentUser } = require("../controllers/userController");
const validateToken = require("../middleware/validateToken");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/validate").get(validateToken,currentUser);
module.exports = router;