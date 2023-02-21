const express = require("express");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    // methods:["GET","POST","PUT","DELETE"],
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(fileUpload());

// {================================ROUTES_IMPORT====================}
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
// {==================MIDLEWARE FOR ERROR=============================}
app.use(errorMiddleware);
module.exports = app;
