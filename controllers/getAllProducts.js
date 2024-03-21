const Product = require("../models/productModel");

//GET /product
async function getAllProducts() {
  const response = await Product.find();
  return response;
}

module.exports = getAllProducts;
