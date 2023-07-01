import express from "express";
const app = express();

// Configuring .env
import dotenv from "dotenv";
dotenv.config();

// Routes
import userRoutes from "./routes/userRoutes.js";
app.use("/api/v1", userRoutes);

// Error handler
import errorHandler from "./middleware/errorHandler.js";
app.use(errorHandler);

// Listening
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
