function createProductValidation(props) {
  console.log("props:", props);
  if (typeof props !== "object" || props === null)
    throw new Error("product should have 3 fields:title,src,description");
  if (!props?.title?.trim()) {
    throw new Error("title is required");
  }
  if (!props?.description?.trim()) {
    throw new Error("description is required");
  }
  if (!props?.src?.trim()) {
    throw new Error("ar tikrai norėtumėt produkto be paveiksliuko?");
  }
}

module.exports = {
  createProductValidation,
};
