const { Router } = require("express");
const getAllProducts = require("../controllers");
const router = Router();

router.get("/", (req, res) => {
  res.json(getAllProducts());
});

router.get("/:id", (req, res) => {
  res.send(`get a ${req.params.id} prod ok`);
});

module.exports = router;
