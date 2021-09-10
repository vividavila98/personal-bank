import express from "express";
const router = express.Router(); // routing system
import { User } from "../models/user.js";
import { loginValidation } from "../src/validation.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

router.post("/login", async (req, res) => {
    // Validation check
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the user exists in database
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send("Email does not exist.");

    // Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Password is incorrect.");

    // Create and assign a token
    // Send id to frontend as response payload (res.data)
    const token = jwt.sign({_id: user._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1h"});
   
    // res.header("auth-token", token).send(token);

    // res.set('Access-Control-Allow-Origin', 'http://localhost:3000/');
    // res.set('Access-Control-Allow-Methods', 'POST');
    // res.set('Access-Control-Allow-Credentials', 'true');
     
    // httpOnly cookie can't be accessed thru javascript
    res.cookie("auth-token",  token, {
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        // expires: new Date(Date.now() + 450000)
    }).send("You are logged in"); 
});

export default router; 