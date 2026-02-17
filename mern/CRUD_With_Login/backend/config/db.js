import mongoose from "mongoose";

export const db = () => {
  try {
    const URI = process.env.MONGO_URI;
    mongoose.connect(URI);
    console.log("Connected Successfully to DB !!!");
  } catch (e) {
    console.log("Not connected to DB", e.message);
  }
};
