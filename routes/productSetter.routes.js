const { Router } = require("express");
const { createProduct, updateProduct } = require("../controllers");
const multer = require("multer");
const path = require("path");
const verifyJWT = require("../middleware/verifyJWT");

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../files")); // Specify the directory where files should be stored
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`); // Use original filename as default
  },
});

// Create multer middleware with configured storage options
const upload = multer({ storage: storage });

// /product
router.post("/", verifyJWT, upload.any(), async (req, res) => {
  try {
    const src = req.files[0].path;
    req.body.src = src;
    const data = await createProduct(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// /product/:id
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
