require("dotenv");
const mongoose = require("mongoose");
uri = process.env.URI || "mongodb://localhost:27017/nomads";

const connectToMongo = () => {
  mongoose.connect(uri)
    .then(() => {
    console.log("Successfully connected to Mongo");
    })
    .catch(() => {
    console.error("Error in connection. Try Again !");
  })
};

module.exports = connectToMongo;
