const Product = require("../models/productModel");
const {
  updateProductValidation,
} = require("../validation/updateProductValidation");

//PATCH /product/:id
async function updateProduct(id, data) {
  updateProductValidation(id, data);

  const response = await Product.findByIdAndUpdate(id, data);

  return response;
}

module.exports = updateProduct;
