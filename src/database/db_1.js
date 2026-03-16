import mongoose from "mongoose";

let db1Connection;

const connectDB1 = async () => {
  try {
    db1Connection = await mongoose.createConnection(process.env.DB_1_URI);

    console.log("DB_1 Connected");
  } catch (error) {
    console.log("DB_1 connection failed:", error.message);
  }
};

const getDB1 = () => db1Connection;

export { getDB1 };
export default connectDB1;
