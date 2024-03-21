const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  src: { type: String, required: true },
  credit: String,
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
