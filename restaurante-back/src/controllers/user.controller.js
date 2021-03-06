const Users = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config/config");

exports.signUp = (req, res) => {
  Users.find({ username: req.body.username })
    .exec()
    .then((user) => {
      if (user.length >= 1)
        return res.status(409).json({ message: "User already exists" });
      else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) return res.status(500).json({ error: err.message });
          else {
            const user = new Users({
              username: req.body.username,
              password: hash,
            });
            user
              .save()
              .then((users) => {
                res.status(201).json({
                  createdUser: {
                    username: users.username,
                  },
                });
              })
              .catch((err) => {
                res.status(500).json({
                  error: err.message,
                });
              });
          }
        });
      }
    });
};

exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  Users.findOne({ username }).then((user) => {
    if (!user) {
      return res.status(404).send("Invalid username or password");
    }
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          isAdmin: user.isAdmin,
          id: user._id,
          username: user.username,
        };
        jwt.sign(
          payload,
          config.SECRET,
          { expiresIn: config.TIMEOUT_SESSION },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        res.status(400).send("Invalid username or password");
      }
    });
  });
};
