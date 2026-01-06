const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { getAllUsers, getUserById } = require("../controllers/userController");

// Admin only
router.get("/", auth, role("admin"), getAllUsers);

// Manager & Admin
router.get("/:id", auth, role("admin", "manager"), getUserById);

module.exports = router;
