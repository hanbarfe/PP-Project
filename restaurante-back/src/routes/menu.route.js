const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/order.controller");

module.exports = (io) => {
  router.get("/kitchen", OrderController.ordersStatus, () => {
    io.emit("kitchen", "orders updated");
  });

  return router;
};
