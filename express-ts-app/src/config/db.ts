import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
export const connectDB = async () => {
  const URI = process.env.MONGO_URI;
  if (!URI) {
    throw new Error("Mongo URI not found");
  }
  try {
    await mongoose.connect(URI);
    console.log("mongoDB connected");
  } catch (err) {
    console.log("mongoDB not connected");
    process.exit(1);
  }
};
