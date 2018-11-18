
var express = require("express");
var path = require("path");
var mongoose = require("mongoose"); 
var config = require("./config/database")

// Connection styntac
mongoose.connect(config.database);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
  console.log("Sudah Connect ke MongoDB")
});

// Initial App
var app = express();

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Setup public folder
app.use(express.static(path.join(__dirname, "public")));

// Setup Index
var pages = require('./routes/pages.js');
// Redirect
app.use('/', pages);

// Srtup Server
var port = 3000;
app.listen(port,function(){
  console.log("Server Running on Port" + port);
});