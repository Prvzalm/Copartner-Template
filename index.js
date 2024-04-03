const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors")
require('dotenv').config();

const User = require("./models/UserSchema");

const app = express();

const key = process.env.FAST2SMS_API_KEY;
const senderId = process.env.SENDER_ID;
const messageId = process.env.MESSAGE_ID;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use(express.json());

app.use(cors());

app.post("/generate-otp", async (req, res) => {
  const { phoneNumber } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    let user = await User.findOne({ phoneNumber });
    if (!user) {
      user = new User({ phoneNumber });
    }
    user.otp = otp;
    await user.save();

    const response = await fetch(`https://www.fast2sms.com/dev/bulkV2?authorization=${key}&route=dlt&sender_id=${senderId}&message=${messageId}&variables_values=${otp}%7C&flash=0&numbers=${phoneNumber}`);

    if (response.ok) {
      res.json({ success: true, message: "OTP sent successfully." });
    } else {
      res.status(response.status).json({ success: false, message: "Failed to send OTP due to an external error." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send OTP." });
  }
});

app.post("/verify-otp", async (req, res) => {
  const { otp, phoneNumber } = req.body;

  try {
    const user = await User.findOne({ phoneNumber });
    if (!user || user.otp !== otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP." });
    }

    user.otp = undefined;
    await user.save();

    const token = jwt.sign(
      { phoneNumber: user.phoneNumber },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ success: true, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to verify OTP." });
  }
});

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Token not provided." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid token." });
    }
    req.user = decoded;
    next();
  });
};

app.get("/protected", verifyToken, (req, res) => {
  res.json({
    success: true,
    message: "You have accessed the protected route.",
    user: req.user,
  });
});

app.listen(5000, () => console.log(`Server running on port 5000`));
