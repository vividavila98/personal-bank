import express from "express";
import register from "../routes/register.js";
import login from "../routes/login.js";
import logout from "../routes/logout.js";
import userInfo from "../routes/userInfo.js";
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
app.use("/api", userInfo);
app.use("/api", logout);

app.listen(3001, () => {
    console.log("Server is running!");
});