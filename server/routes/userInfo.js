import express from "express";
import { verifyToken } from "../src/verifyToken.js";
import { User } from "../models/user.js";
const router = express.Router(); // routing system

router.get("/userInfo", verifyToken, async (req, res) => {
    if (req.user) {
        console.log("in route:");
        console.log(req.user);
        let authId = req.user._id;

        try {
           const authUser = await User.findOne({_id: authId});
           res.send(authUser);
        } catch(e) {
            console.error(e);
        }
    }
})

export default router;