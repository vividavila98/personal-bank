import express from "express";
const router = express.Router(); // routing system

router.get("/logout", async (req, res) => {
    res.cookie("authToken", "loggedout", {
        httpOnly: true,
        expires: new Date(Date.now() + 1 * 1000)
    });
    res.status(200).send('User is logged out');
});

export default router; 