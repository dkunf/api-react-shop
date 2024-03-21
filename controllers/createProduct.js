const {
  createProductValidation,
} = require("../validation/createProductValidation");

const Product = require("../models/productModel");

//POST /product
async function createProduct(props) {
  createProductValidation(props);
  const response = await Product.create(props);
  return response;
}

module.exports = createProduct;
