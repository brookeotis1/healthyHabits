const router = require("express").Router();
const goalRoutes = require("./goals");
const authRoutes = require("./auth");
const usersRoutes = require("./users");

// goal routes
router.use("/api/goals", goalRoutes);
router.use("/auth", authRoutes);
router.use("/users", usersRoutes);

module.exports = router;
