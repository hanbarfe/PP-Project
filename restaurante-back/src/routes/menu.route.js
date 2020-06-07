const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/order.controller");
const passport = require("passport");
const checkAdmin = require("../middlewares/checkAdmin");

module.exports = (io) => {
  router.put(
    "/kitchen",
    passport.authenticate("jwt", { session: false }),
    checkAdmin,
    OrderController.ordersStatus,
    () => {
      io.emit("kitchen", "orders updated");
    }
  );

  return router;
};
