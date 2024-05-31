import mongoose, { Connection } from "mongoose";

let isConnected: Connection | boolean = false;

const connectDatabase = async () => {
  if (isConnected) {
    console.log("MongoDB already successfully...");
    return isConnected;
  }

  try {
    const res = await mongoose.connect(process.env.MONGO_URI!);
    isConnected = res.connection;
    console.log("MongoDB connected successfully...");
    return isConnected;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default connectDatabase;
