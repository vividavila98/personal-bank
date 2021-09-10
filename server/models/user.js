import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        max: 100
    },
    email: {
        type: String, 
        required: true,
        max: 100
    },
    password: {
        type: String, 
        required: true, 
        min: 6,
        max: 1024
    }, 
    date: {
        type: Date,
        default: Date.now
    }
});

export const User = mongoose.model("User", userSchema);
