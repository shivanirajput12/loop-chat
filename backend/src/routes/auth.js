import express from "express";
import { signup } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup);

router.get("/login", (req, res) => {
  res.send("Login API");
});

router.get("/logout", (req, res) => {
  res.send("Logout API");
});

export default router;