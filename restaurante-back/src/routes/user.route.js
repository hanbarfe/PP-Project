const express = require("express");
const route = new express.Router();
const UserController = require("../controllers/user.controller");

route.post("/signUp", UserController.signUp);
route.post("/login", UserController.login);

module.exports = route;