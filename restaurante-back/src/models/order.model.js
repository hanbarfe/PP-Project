const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: { type: String },
  type: { type: String },
  value: { type: Number },
  photo: { type: String },
  status: {
    type: String,
    enum: ["NA_FILA", "PREPARANDO", "SAIU_PARA_ENTREGA", "ENTREGUE"],
    default: "NA_FILA",
  },
});

module.exports = mongoose.model("Order", OrderSchema);
