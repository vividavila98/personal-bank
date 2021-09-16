import express from "express";
import { verifyToken } from "../src/verifyToken.js";
import { User } from "../models/user.js";
const router = express.Router(); // routing system

router.get("/userInfo", verifyToken, async (req, res) => {
    if (req.user) {
        let authId = req.user._id;

        try {
           const authUser = await User.findOne({_id: authId});
           res.status(200).send(authUser);
        } catch(e) {
            console.error(e);
        }
    }
})

export default router;