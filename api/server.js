const app = require("./app.js");
const connectDataBase=require("./config/database")
// {==================CONFIG=================}
require("dotenv").config({ path: "api/config/config.env"});
// {==========MONGOOSE=========}
connectDataBase()
const port = process.env.PORT || 5000;
const server =   app.listen  (port, async  () => {
    console.log(`Server is working on http://localhost:${port}`);
   
  });