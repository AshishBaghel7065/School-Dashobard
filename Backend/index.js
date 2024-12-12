import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import adminRoutes from "./routes/admin.route.js";
import ConnectDB from "./config/db.js";
import  facultyRoutes  from "./routes/faculty.route.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors()); // Enables CORS for cross-origin requests
app.use(bodyParser.json()); // Parses request bodies
app.use(cookieParser()); // Parses cookies

// Root Route
app.get("/", (req, res) => {
  res.send({
    message: `Server is working on Port : ${PORT}`,
    status: true,
    error: false,
  });
});

// Connect to Database
ConnectDB();

// Admin Routes
app.use("/api", adminRoutes);
app.use("/api", facultyRoutes);
// Start Server
app.listen(PORT, () => {
  console.log(`Server is working on Port : ${PORT}`);
});
