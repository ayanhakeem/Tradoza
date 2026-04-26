const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "change_this_in_prod";

module.exports = function (req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // Ensure we store it as req.user.id so the routes can find it
    req.user = { id: decoded.id || decoded._id }; 
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
