const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  mailId: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
  contact: {
    type: "number",
  },
  age: {
    type: "number",
  },
  gender: {
    type: "string",
  },
  category: {
    type: "string",
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
