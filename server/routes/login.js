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
    if (!user) return res.status(400).json({auth: false, message: "Email does not exist."});

    // Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({auth: false, message: "Password is incorrect."});

    // Create and assign a token
    // Send id to frontend as response payload (res.data)
    const token = jwt.sign({_id: user._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1h"});
     
    // httpOnly cookie can't be accessed thru javascript
    res.cookie("authToken",  token, {
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        // expires: new Date(Date.now() + 450000)
    });
    
    res.json({auth: true, name: user.name, email: user.email});
});

export default router; 