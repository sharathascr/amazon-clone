const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log("Error in connection", err));

app.listen(5001, () => console.log("Server listening on 5001"));
