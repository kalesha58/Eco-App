const app = require("./app.js");
const connectDataBase=require("./config/database")
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// {==================CONFIG=================}
require("dotenv").config({ path: "api/config/config.env"});

const port = process.env.PORT || 5000;
const server =   app.listen  (port, async  () => {
    console.log(`Server is working on http://localhost:${port}`);
    await connectDataBase();
  });
  // Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
