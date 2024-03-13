const { Router } = require("express");
const { createProduct, updateProduct } = require("../controllers/setProducts");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const data = await createProduct(req.body);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:id", (req, res) => {
  const data = updateProduct();
  res.json(data);
});

module.exports = router;
