const app = require("./app.js");
const cloudinary = require("cloudinary");
const connectDataBase=require("./config/database")

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// {==================CONFIG=================}
require("dotenv").config({ path: "api/config/config.env"});


connectDataBase();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const port = process.env.PORT || 5000;
const server =   app.listen  (port,   () => {
    console.log(`Server is working on http://localhost:${port}`);
 
  });
 
  // Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
