const express = require("express");
const route = new express.Router();
const OrderController = require("../controllers/order.controller");

route.get("/orders", OrderController.getAllOrders);
route.get("/orders/:id", OrderController.getOneOrder);
route.post("/orders/:id", OrderController.createOrder);
route.delete("/orders/:id", OrderController.deleteOrder);

module.exports = route;
