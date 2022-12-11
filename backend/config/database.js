const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb is connected with server:${data.connection.host}`);
    });
};

module.exports = connectDatabase;
