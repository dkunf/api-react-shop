const { Types } = require("mongoose");

function updateProductValidation(id, data) {
  if (!Types.ObjectId.isValid(id)) {
    throw new Error("id is not valid");
  }
  if (!data) throw new Error("where is data?");

  if (
    !data.hasOwnProperty("title") &&
    !data.hasOwnProperty("description") &&
    !data.hasOwnProperty("src")
  )
    throw new Error("data should at least have title or description or src");
}

module.exports = {
  updateProductValidation,
};
