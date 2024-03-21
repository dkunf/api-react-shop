const { Router } = require("express");
const { createProduct, updateProduct } = require("../controllers");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const data = await createProduct(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = await updateProduct(req.params.id, req.body);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
