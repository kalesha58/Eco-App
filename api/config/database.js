const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
const connectDatabase = () => {
  mongoose.set("useNewUrlParser", true);
  mongoose
    .connect(process.env.DB_URI, {
      
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
