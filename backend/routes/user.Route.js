const express = require("express");
const router = express();
const { signupUser, loginUser } = require("../controllers/user.Controllers");


// signup router
router.post("/signup", signupUser);

// login router
router.post("/login", loginUser);


module.exports = router;