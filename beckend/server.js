const express = require("express");
const mongoose = require("mongoose");
const thelassemia = require("./routes/thelassemiaRoute.js");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;

// routes for user
app.use("/api/thelassemia", thelassemia);

// connect to MongoDB
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb://ecommerce:8u5qgGf7dec5l7AA@cluster0-shard-00-00.jjwmo.mongodb.net:27017,cluster0-shard-00-01.jjwmo.mongodb.net:27017,cluster0-shard-00-02.jjwmo.mongodb.net:27017/users?ssl=true&replicaSet=atlas-3rw3w5-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log("The Roktobondhu app is running on port : ", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
