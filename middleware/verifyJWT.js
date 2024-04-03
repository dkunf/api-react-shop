const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
  const authHeader = req.headers.Authorization || req.headers.authorization;
  if (!authHeader?.startsWith("Bearer "))
    return res.status(401).json({ error: "unauthorized" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    //we add our props to req object!! that's how we can have
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "unauthorized" });
  }
}
module.exports = verifyJWT;
