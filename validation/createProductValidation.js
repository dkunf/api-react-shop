function createProductValidation(props) {
  if (!props?.title?.trim()) {
    throw new Error("title is required");
  }
  if (!props?.description?.trim()) {
    throw new Error("description is required");
  }
  if (!props.hasOwnProperty("src")) {
    throw new Error("ar tikrai norėtumėt produkto be paveiksliuko?");
  }
}

module.exports = {
  createProductValidation,
};
