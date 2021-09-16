import express from "express";
const router = express.Router(); // routing system
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models/user.js";
import { registerValidation } from "../src/validation.js";

dotenv.config();

router.post("/register", async (req, res) => {
    // Validate before creating a user
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Check if the user exists in database
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send("Email already exists.");

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user following User Model with data from req body
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    
    try {
        // save to db
        await newUser.save();
        
        const token = jwt.sign({_id: newUser._id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "1h"});
     
        // httpOnly cookie can't be accessed thru javascript
        res.cookie("authToken",  token, {
            httpOnly: true,
            sameSite: "strict",
            secure: true,
            // expires: new Date(Date.now() + 450000)
        });
        
        res.json({auth: true, name: newUser.name, email: newUser.email});
    } catch(e) {
        console.error(e);
        res.status(400).send(e);
    }

});

export default router; 