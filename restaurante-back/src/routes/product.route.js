const express = require("express");
const route = new express.Router();
const ProductController = require("../controllers/product.controller");
const multer = require("multer");
const uploadConfig = require("../../config/upload");
const upload = multer(uploadConfig);
const passport = require("passport");
const checkAdmin = require("../middlewares/checkAdmin");

route.get(
  "/products",
  ProductController.getAllProducts
);
route.get("/products/:id", ProductController.getOneProduct);
route.post(
  "/products",
  upload.single("photo"),
  ProductController.createProduct
);

module.exports = route;
