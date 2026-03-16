import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB1 from "./src/database/db_1.js";
import connectDB2 from "./src/database/db_2.js";

dotenv.config();

const startServer = async () => {
  try {
    await connectDB1();
    await connectDB2();

    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Server start failed:", error.message);
  }
};

startServer();
