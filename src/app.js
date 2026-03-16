import express from "express";
import routes from "./routes/routes.js";

const app = express();

app.use(express.json());

app.use("/api", routes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;
