import express from "express";
import { signup } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", (req, res) => {
  res.send("Login API");
});

router.post("/logout", (req, res) => {
  res.send("Logout API");
});

export default router;