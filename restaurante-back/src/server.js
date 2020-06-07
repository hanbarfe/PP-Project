const express = require("express");
const app = express();
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const config = require("../config/config");
const productRoute = require("./routes/product.route");
const orderRoute = require("./routes/order.route");
const userRoute = require("./routes/user.route");
const db = require("../config/db");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const menuRoute = require("./routes/menu.route")(io);
require("./middlewares/passport")(passport);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("combined"));

db.connectDB();

app.use(config.API_BASE_URL, productRoute);
app.use(config.API_BASE_URL, menuRoute);
app.use(config.API_BASE_URL, orderRoute);
app.use(config.API_BASE_URL, userRoute);

app.get("*", function (req, res) {
  res.status(404).send("what???");
});

io.on("connection", (socket) => {
  console.log("A new user is connected!");

  socket.on("disconnect", () => {
    console.log("A user is gone!");
  });
});

http.listen(config.SERVER_PORT, () => {
  console.log(`Server is running on port ${config.SERVER_PORT}`);
});
