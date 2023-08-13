import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);

    if (connection) {
      console.log("Database conneted");
    }
  } catch (error) {
    console.log("Database connection error", error);
  }
};

export default connectDb;
