import mongoose from "mongoose";

const mongo: string | undefined = process.env.MONGO_URI
  ? process.env.MONGO_URI
  : "";

const connectDb = async () => {
  try {
    const conx = await mongoose.connect(mongo);
    console.log(`MongoDB connected successfully: ${conx.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDb;
