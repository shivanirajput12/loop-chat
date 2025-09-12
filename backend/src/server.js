// const express = require("express");

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import messagesRoutes from "./routes/messages.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);


app.listen(PORT, () => {
  console.log("Server is running on port:- " + PORT);
});
