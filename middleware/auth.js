const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // Attach decoded user payload to request object
    req.user = decoded.user;
    
    // Proceed to next middleware
    next();
  } catch (err) {
    // Handle invalid token
    console.error(err.message);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
