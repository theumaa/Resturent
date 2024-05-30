const mongoose = require("mongoose");

const RestaurentSchema = new mongoose.Schema({
  name: String,
  email: String,
  type: String,
});

const RestaurentModel = mongoose.model("restaurents", RestaurentSchema);
module.exports = RestaurentModel;
