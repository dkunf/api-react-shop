const Product = require("../models/productModel");

//GET /product/id
async function getProductById(id) {
  const response = await Product.findById(id);
  return response;
}

module.exports = getProductById;
