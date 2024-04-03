const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TelegramLink = require("./routes/TelegramLink");
require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use(express.json());

app.use(cors());

app.use("/api", TelegramLink);

app.listen(5500, () => console.log(`Server running on port 5500`));
