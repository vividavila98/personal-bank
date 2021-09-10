import express from "express";
import register from "../routes/register.js";
import login from "../routes/login.js";
import profile from "../routes/profile.js";
import { connectDB } from "./db.js";
import cors from "cors";
import cookieParser from "cookie-parser"; 

// Create express app
const app = express();

// Connect to database
connectDB();

app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded()); // Parse URL-encoded bodies
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// Example route
app.get("/", (req, res) => {
    res.send("Hello world!");
})

// Define our routes
app.use("/api", register);
app.use("/api", login);
app.use("/api", profile);

app.listen(3001, () => {
    console.log("Server is running!");
});