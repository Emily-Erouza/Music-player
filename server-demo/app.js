const express = require("express");
const cors = require("cors");
// const mongoose = require('mongoose');
// require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  return res.json("hi there...");
});

app.listen(4000, () => {
  console.log("listening to port 4000");
});



