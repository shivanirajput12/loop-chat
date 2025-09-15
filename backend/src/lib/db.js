import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    if(!MONGO_URI) throw new Error("MONGO_URI is not defined in environment variables");
   const conn =  await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully:", conn.connection.host);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);  // 1 status code means fail, 0 means success
  }
};

export default connectDB;