const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bodyParser = require("body-parser").json();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JWT_SECRET = "mysecretkey"; // Use an environment variable in production

// User Signup Route
router.post(
  "/createuser",
  bodyParser,
  [
    body("mailId", "Invalid Mail").isEmail(),
    body("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ mailId: req.body.mailId });
      if (user) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        mailId: req.body.mailId,
        password: hashedPassword,
        ...(req.body.contact && { contact: req.body.contact }),
        ...(req.body.age && { age: req.body.age }),
        ...(req.body.gender && { gender: req.body.gender }),
        ...(req.body.category && { category: req.body.category }),
      });

      res.status(201).json({ message: "User successfully created!" });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

// User Sign-in Route with JWT Token
router.post(
  "/signin",
  bodyParser,
  [
    body("mailId", "Invalid Mail").isEmail(),
    body("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findOne({ mailId: req.body.mailId });
      if (!user) {
        return res
          .status(404)
          .json({ error: "User not found. Please sign up first." });
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(401).json({ error: "Incorrect Password" });
      }

      const payload = { id: user._id, name: user.name };
      const token = jwt.sign(
        payload,
        process.env.JWT_SECRET || "your_jwt_secret",
        { expiresIn: "1h" }
      );
      console.log("User Logged into the system!");
      res.json({ token });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
