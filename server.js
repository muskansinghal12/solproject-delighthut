const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/orders", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const detailsSchema = new mongoose.Schema({
  Name: String,
  Email_Address: String,
  Contact_Number: String,
  Address: String,
  Delivery_Date: String,
  Delivery_Time: String,
  Purchased_Items: String,
  Bill_Amount: String,
});
const Order = mongoose.model("placedOrders", detailsSchema);
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/home", function(req, res) {
  res.sendFile(__dirname + "/homepage.html");
});
app.get("/menu", function(req, res) {
  res.sendFile(__dirname + "/menu.html");
});
app.get("/contact", function(req, res) {
  res.sendFile(__dirname + "/contact.html");
});
var purchasedItems;
var total_amount;
app.post("/form", function(req, res) {
  purchasedItems = req.body.purchaseditem;
  total_amount = req.body.amount;
  res.sendFile(__dirname + "/order.html");
});
app.post("/menu", function(req, res) {
  res.sendFile(__dirname + "/menu.html");
});

app.post("/order", function(req, res) {
  var order = new Order({
    Name: req.body.fname,
    Email_Address: req.body.email,
    Contact_Number: req.body.contact,
    Address: req.body.address,
    Delivery_Date: req.body.ddate,
    Delivery_Time: req.body.dtime,
    Purchased_Items: purchasedItems,
    Bill_Amount: total_amount,
  });
  order.save();
  res.sendFile(__dirname + "/submit.html");
});
app.listen(3000, function() {
  console.log("Server has started on port 3000");
});
