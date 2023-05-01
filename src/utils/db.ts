import mongoose from "mongoose";

export async function connectToDb() {
  const MONGO_URL =
    process.env.MONGO_URL || "mongodb://mongo:27017/default-db";
    console.log('MONGO_URL: ', MONGO_URL);
  try {
    await mongoose.connect(MONGO_URL);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  console.log("Connected to MongoDB");
}