const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const userRoute = require("./routes/user.Route");

/* Application Middleware */
app.use(express.json());
app.use(cors())

/** Home Route **/
app.get("", (req, res) => {
  res.send("Roktobondho Server Side")
})

// routes for user
app.use("/api/user", userRoute);


// connect to MongoDB
mongoose.set('strictQuery', false)
mongoose
  .connect("mongodb+srv://roktobondhuapi:PLKv7ExYU89w2oEp@cluster0.d89bc7r.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    app.listen(port, (req, res) => {
      console.log(`App listening on PORT : ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
