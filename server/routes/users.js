const express = require("express");
const { loginUser, logout, registerUser, authenticateUser } = require("../controllers/users");
const { auth } = require("../middleware/auth");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/auth", auth, authenticateUser )

module.exports = router;
