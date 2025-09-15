import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  
 const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
  expiresIn: "10d",
 });

 res.cookie("jwt", token, {
  httpOnly: true,  ///prevent client-side JS from reading the cookie (cross-site scripting attacks)
  secure: process.env.NODE_ENV === "development" ? false : true, //only send cookie over HTTPS
  sameSite: "strict",
  maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
 });

 return token;
};


