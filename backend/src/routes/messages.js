import express from "express";

const router = express.Router();

router.get("/send", (req, res) => {
  res.send("Send message api");
});

router.get("/receive", (req, res) => {
  res.send("Receive message api");
});


export default router