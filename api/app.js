const express = require("express");
const app = express();
const cors=require("cors")
const errorMiddleware = require("./middleware/error");
app.use(express.json())
app.use(cors())

// {================================ROUTES_IMPORT====================}
const product = require("./routes/productRoute");
app.use("/api/v1", product);
// {==================MIDLEWARE FOR ERROR=============================}
app.use(errorMiddleware);
module.exports = app;