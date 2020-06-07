const express = require("express");
const route = new express.Router();
const OrderController = require("../controllers/order.controller");
const passport = require("passport");
const checkAdmin = require("../middlewares/checkAdmin");

route.get(
  "/orders",
  passport.authenticate("jwt", { session: false }),
  checkAdmin,
  OrderController.getAllOrders
);
route.get("/orders/:id", OrderController.getOneOrder);
route.post("/orders/:id", OrderController.createOrder);
route.delete(
  "/orders/:id",
  passport.authenticate("jwt", { session: false }),
  checkAdmin,
  OrderController.deleteOrder
);

module.exports = route;
