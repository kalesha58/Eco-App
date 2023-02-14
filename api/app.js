const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
app.use(express.json())
// {================================ROUTES_IMPORT====================}
const product = require("./routes/productRoute");
app.use("/api/v1", product);
// {==================MIDLEWARE FOR ERROR=============================}
app.use(errorMiddleware);
module.exports = app;