const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginUser(user) {
  const { username, password } = user;

  if (!username || !password) throw new Error("username and password required");

  const findUser = await User.findOne({ username: username });

  if (!findUser) throw new Error("username  incorrect");

  const match = await bcrypt.compare(password, findUser.password);

  if (!match) throw new Error(" password incorrect");

  const token = jwt.sign({ username }, process.env.JWT_SECRET, {
    expiresIn: "2m",
  });

  console.log("succesful login user...");

  return { token };
  //todo validation

  //   const userExists = await User.find();
  //   if (userExists?.length)
  //     throw new Error("user exists, we allow only 1 user to exist for now");

  //   if (user?.username?.trim() && user?.password?.trim()) {
  //     const hashedPwd = await bcrypt.hash(user.password, 10);
  //     user.password = hashedPwd;
  //     return await User.create(user);
  //   }
}

module.exports = loginUser;
