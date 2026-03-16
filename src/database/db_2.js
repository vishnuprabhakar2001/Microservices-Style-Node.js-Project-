import mongoose from "mongoose";

let db2Connection;

const connectDB2 = async () => {
  try {
    db2Connection = await mongoose.createConnection(process.env.DB_2_URI);

    console.log("DB_2 Connected");
  } catch (error) {
    console.log("DB_2 connection failed:", error.message);
  }
};

const getDB2 = () => db2Connection;

export { getDB2 };
export default connectDB2;
