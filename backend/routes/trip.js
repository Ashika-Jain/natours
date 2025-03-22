const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Trip = require("../models/Trip");
// const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser").json();

router.post("/search", async (req, res) => {
  const { input } = req.body;
  const lastWord = input.split(" ").pop();
  console.log(input);
  console.log(lastWord);
  try {
    const destination = await Trip.findOne({ destination: lastWord });
    if (destination) {
      res.json({ itinerary: destination.itinerary });
    } else {
      res.status(404).send("Destination not found");
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
