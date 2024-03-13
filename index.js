const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 3000;
require("dotenv").config();

app.use(express.json());

app.use("/product", require("./routes/productGetterRoutes"));
app.use("/product", require("./routes/productSetterRoutes"));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("db connected");
  } catch (error) {
    console.log("db connection error:", error.message);
  }
};

connectDB();

app.listen(PORT, () => console.log("server up on", PORT));
