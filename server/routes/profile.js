import express from "express";
import { verifyToken } from "../src/verifyToken.js";
const router = express.Router(); // routing system

router.get("/profile", verifyToken, (req, res) => {
    res.json({posts:{title: "my first post", description: "this is private"}});
})

export default router;