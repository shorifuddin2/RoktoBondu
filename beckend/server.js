const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const port = process.env.PORT || 4000;

// routes for user
// hello
// connect to MongoDB
mongoose.set('strictQuery', true)
mongoose
  .connect(
    "mongodb+srv://roktobondhuapi:PLKv7ExYU89w2oEp@cluster0.d89bc7r.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, (req, res) => {
      console.log("The Roktobondhu app is running on port : ", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
