const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Protected route example
router.get("/", auth, (req, res) => {
  // Access authenticated user via req.user
  res.send("Authenticated route, user ID: " );
});

module.exports = router;
