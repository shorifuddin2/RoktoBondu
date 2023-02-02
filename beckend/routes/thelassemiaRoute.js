const express = require("express");
const createThelassemia = require("../controllers/thelassemiaController");
const thelassemiaMiddleware = require("../middlewares/thelassemiaMiddleware");

const router = express.Router();

router.post("/", thelassemiaMiddleware, createThelassemia);

module.exports = router;
