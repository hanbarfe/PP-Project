const Products = require("../models/product.model");

exports.createProduct = (req, res) => {
  const { name, type, value } = req.body;
  const { filename: photo } = req.file;

  Products.create({
    name,
    type,
    value,
    photo,
  })
    .then((product) => {
      res.status(201).send(product);
    })
    .catch((err) => res.status(500).send("Some error ocurred: " + err));
};

exports.getAllProducts = (req, res) => {
  Products.find()
    .exec()
    .then((products) => {
      res.send(products);
    });
};

exports.getOneProduct = (req, res) => {
  Products.findById(req.params.id)
    .exec()
    .then((product) => res.send(product))
    .catch((err) => res.status(404).send("Product doesn't exists"));
};
