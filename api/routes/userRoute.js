const express = require("express");
const { registerUser, loginUser, logout, getUserDetails } = require("../controller/userController");
const router = express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
// {=======AUTHENTICATION OF USER STARTS HERE ===================}
router.route("/me").get( getUserDetails);
module.exports = router;