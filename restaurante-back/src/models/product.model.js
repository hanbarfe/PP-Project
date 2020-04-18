const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String },
  type: { type: String },
  value: { type: Number },
  photo: { type: String }
});

module.exports = mongoose.model("Product", ProductSchema);
