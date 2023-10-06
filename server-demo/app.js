const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
// require("dotenv").config();

const app = express();


const userRoute = require("./routes/User" );
app.use=("./user".userRoute);

const url1 = "mongodb+srv://EmilySbongile:Emily.20@cluster0.xwrzhfb.mongodb.net/?retryWrites=true&w=majority"
console.log(url1)
mongoose.connect(url1)


app.get("/getusers", (req, res) => {
  UserModel.find({}).then(function(users){
    res.json(users)
    
  }).catch(function(err){
    console.log(err)

  })
});

app.listen(4000, () => {
  console.log("listening to port 4000");
});



