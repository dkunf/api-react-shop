const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = process.env.port || 3000;
require("dotenv").config();

const cors = require("cors");

//it also allows without cors, interesting...
//Access-Control-Allow-Headers:*
//Access-Control-Allow-Methods:	*
//Access-Control-Allow-Origin:	*

app.use(cors());
app.use(express.json());

app.use("/product", require("./routes/productGetter.routes"));
app.use("/product", require("./routes/productSetter.routes"));
app.use("/user", require("./routes/user.routes"));
app.get("/", (req, res) => res.send("ok, default route '/' workin'"));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("db connected");
  } catch (error) {
    console.log("db connection error:", error.message);
  }
};

connectDB();

app.listen(port, () => console.log("server up on", port));
