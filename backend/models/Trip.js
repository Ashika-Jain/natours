const mongoose = require("mongoose");
const { Schema } = mongoose;

const TripSchema = new Schema({
  destination: "string",
  itinerary: "string",
});

const Trip = mongoose.model("Trip", TripSchema);
module.exports = Trip;
