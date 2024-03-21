const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 3000;
require("dotenv").config();

const cors = require("cors");

//it allows without cors, interesting...
//Access-Control-Allow-Headers:*
//Access-Control-Allow-Methods:	*
//Access-Control-Allow-Origin:	*

app.use(cors());
app.use(express.json());

app.use("/product", require("./routes/productGetterRoutes"));
app.use("/product", require("./routes/productSetterRoutes"));
app.get("/", (req, res) => res.send("ok, workin'"));

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
