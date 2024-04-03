const { Router } = require("express");
const getAllProducts = require("../controllers/getAllProducts");
const getProductById = require("../controllers/getProductById");
const router = Router();
const fs = require("fs");

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
    // const ff = await readFileAsync("../files/1711576894098-new-file");
    // console.log("file:", ff);
    const id = req.params.id.trim();

    const prodObj = await getProductById(id);
    console.log("prodObj", prodObj);
    //prodObj.src has path to file
    const filePath = prodObj.src;
    console.log("path:", filePath);

    if (!fs.existsSync(filePath)) {
      throw new Error("File not found");
    }

    const fileData = await readFileAsync(filePath);

    // Set up multi-part response
    res.set("Content-Type", "multipart/mixed; boundary=boundarystring");

    // Send JSON object part
    res.write("--boundarystring\r\n");
    res.write("Content-Type: application/json\r\n\r\n");
    res.write(
      JSON.stringify({
        title: prodObj?.title,
        description: prodObj?.description,
      }) + "\r\n"
    );

    // Send file part
    res.write("--boundarystring\r\n");
    res.write("Content-Type: application/octet-stream\r\n");

    res.write(fileData);
    res.write("\r\n--boundarystring--");

    // End response
    res.end();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

async function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

module.exports = router;
