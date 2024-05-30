const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const RestaurentModel = require("./models/restaurents");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.get("/", (req, res) => {
  RestaurentModel.find({})
    .then((restaurents) => res.json(restaurents))
    .catch((err) => res.json(err));
});

app.get("/getRestaurent/:id", (req, res) => {
  const id = req.params.id;
  RestaurentModel.findById({ _id: id })
    .then((restaurents) => res.json(restaurents))
    .catch((err) => res.json(err));
});

app.put("/updateRestaurent/:id", (req, res) => {
  const id = req.params.id;
  RestaurentModel.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      email: req.body.email,
      type: req.body.type,
    }
  )
    .then((restaurents) => res.json(restaurents))
    .catch((err) => res.json(err));
});

app.delete("/deleteRestaurent/:id", (req, res) => {
  const id = req.params.id;
  RestaurentModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.post("/createRestaurent", (req, res) => {
  RestaurentModel.create(req.body)
    .then((restaurents) => res.json(restaurents))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is RUNNING");
});
