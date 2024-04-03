const { Router } = require("express");
const router = Router();
const registerUser = require("../controllers/registerUser");
const loginUser = require("../controllers/loginUser");

//POST /user/
router.post("/", async (req, res) => {
  try {
    await registerUser(req.body);
    res.status(200).json(" user registered");
  } catch (error) {
    console.log(error);
    res.status(400).json("user reg failed");
  }
});

//POST /user/login
router.post("/login", async (req, res) => {
  try {
    let token = await loginUser(req.body);
    res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json("user login failed");
  }
});

module.exports = router;
