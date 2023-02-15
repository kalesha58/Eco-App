const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const bodyParser=require("body-parser");
const cors=require("cors")
const errorMiddleware = require("./middleware/error");
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

// {================================ROUTES_IMPORT====================}
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
app.use("/api/v1", product);
app.use("/api/v1", user);
// {==================MIDLEWARE FOR ERROR=============================}
app.use(errorMiddleware);
module.exports = app;