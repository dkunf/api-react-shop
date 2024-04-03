const User = require("../models/userModel");
const bcrypt = require("bcrypt");

async function registerUser(user) {
  console.log("registering user...");
  //todo validation

  const userExists = await User.find();
  if (userExists?.length)
    throw new Error("user exists, we allow only 1 user to exist for now");

  if (user?.username?.trim() && user?.password?.trim()) {
    const hashedPwd = await bcrypt.hash(user.password, 10);
    user.password = hashedPwd;
    return await User.create(user);
  }
}

module.exports = registerUser;
