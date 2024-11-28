import express from "express";
import cors from "cors";
import router from "./app/router"; // assuming you have this file
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import cookieParser from "cookie-parser";
import notFound from "./app/middleware/notFound";

const app = express();

// Allow requests from localhost:3000 and other domains
app.use(
  cors({
    origin: ["http://localhost:3000","https://tanvir3.vercel.app/"], // You can allow more domains or * for all
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
    credentials: true, // Allow credentials if you need cookies or authentication
  })
);

// JSON parsing middleware
app.use(express.json());

// Cookie parser middleware
app.use(cookieParser());

// Define routes
app.use("/api/v1", router);

// Global error handler
app.use(globalErrorHandler);

// Basic route to check server connection
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Middleware for handling 404 (Not Found)
app.use(notFound);

export default app;
