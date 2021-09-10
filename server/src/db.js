import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db = process.env.MONGO_URI;

// Connect to database
export const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB is connected");
    } catch(e) {
        console.error(e);
    }
} 
