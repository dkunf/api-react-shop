const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: String,
});

const Product = mongoose.model("products", productSchema);

async function createProduct(props) {
  const response = await Product.create(props);
  return response;
}

function updateProduct() {
  return "updated";
}

module.exports = {
  createProduct,
  updateProduct,
};
