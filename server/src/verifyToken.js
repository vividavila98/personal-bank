import jwt from "jsonwebtoken";

// Call this function to protected routes
// When user logs in, they're assigned a token
export const verifyToken = (req, res, next) => {

    // Check if user has a token 
    const token = req.cookies.authToken;

    if (!token) return res.status(401).send("Access denied.");

    try {
        // Returns user id if it's verified
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = verified; // saves token and id
        next();
    } catch(e) {
        res.clearCookies("authToken");
        res.status(400);
        res.json({auth: false, message: "Invalid token"});
    }

}