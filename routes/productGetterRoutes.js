const { Router } = require("express");
const getAllProducts = require("../controllers/getAllProducts");
const getProductById = require("../controllers/getProductById");
const router = Router();

// /product
router.get("/", async (req, res) => {
  try {
    res.json(await getAllProducts());
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// /product/id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id.trim();
    res.json(await getProductById(id));
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
