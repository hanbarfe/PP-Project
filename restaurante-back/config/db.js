const mongoose = require("mongoose");
const config = require("./config");

exports.connectDB = () => {
  mongoose
    .connect(config.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("MongoDB is connected");
    })
    .catch((err) => console.log(err));
};
