const Order = require("../models/order.model");
const Product = require("../models/product.model");

exports.createOrder = (req, res) => {
  Product.findById(req.params.id)
    .exec()
    .then((product) => {
      let name = product.name;
      let type = product.type;
      let value = product.value;
      let photo = product.photo;
      Order.create({ name, type, value, photo })
        .then((orders) => {
          res.status(201).send(orders);
        })
        .catch((err) => res.status(500).send("Some error ocurred: " + err));
    });
};

exports.getOneOrder = (req, res) => {
  Order.findById(req.params.id)
    .exec()
    .then((order) => res.send(order))
    .catch((err) => res.status(404).send("Order doesn't exists"));
};

exports.getAllOrders = (req, res) => {
  Order.find()
    .exec()
    .then((orders) => {
      res.send(orders);
    });
};

exports.ordersStatus = (req, res, next) => {
  Order.find()
    .exec()
    .then((orders) => {
      orders.forEach((orders) => {
        if (orders.status === "NA_FILA") {
          orders.status = "PREPARANDO";
        } else if (orders.status === "PREPARANDO") {
          orders.status = "SAIU_PARA_ENTREGA";
        } else if (orders.status === "SAIU_PARA_ENTREGA") {
          orders.status = "ENTREGUE";
        }
        orders.save();
      });
      res.send(orders);
      next();
    });
};

exports.deleteOrder = (req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .exec()
    .then((order) => res.status(200).send("Order deleted"))
    .catch((err) => res.status(404).send("Order doesn't exists"));
};
