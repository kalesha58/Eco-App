const express = require("express");

const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");

require("dotenv").config({ path: "api/config/config.env"});
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: true,
    // origin: "http://localhost:3000",
    methods:["GET","POST","PUT","DELETE"],
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(fileUpload());
// {================================ROUTES_IMPORT====================}
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymetRoute");
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
// {==================MIDLEWARE FOR ERROR=============================}
app.use(errorMiddleware);
module.exports = app;
