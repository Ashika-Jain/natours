require("dotenv");
const connectToMongo = require("./database");
const express = require("express");
var cors= require('cors')
PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
connectToMongo();

// Routes Will Follow
app.use(cors());
app.use("/auth", require('./routes/auth'))
app.use("/trip", require('./routes/trip'))

app.listen(PORT, () => {
  console.log(`Server Running on Port : ${PORT}`);
});
