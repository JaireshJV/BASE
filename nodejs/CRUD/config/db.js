import mongoose from "mongoose";

export const db = () => {
  try {
     mongoose.connect("mongodb://localhost:27017/")
    console.log("CONNECTED !!!");
    
  } catch (e) {
    console.error(e.message,"Failed connecting to DB");
  }
};


