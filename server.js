const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(express.json());

app.use(cors({
  origin: process.env.CLIENT_URL
}));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"));

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});