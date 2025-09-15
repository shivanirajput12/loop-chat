// const express = require("express");

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import messagesRoutes from "./routes/messages.js";
import path from "path";
import connectDB from "./lib/db.js";

dotenv.config();

const app = express();
const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;

app.use(express.json());  // to parse json data in request body

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);

//make ready for deployment
if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(PORT, () => {
  console.log("Server is running on port:- " + PORT);
  connectDB();
});
