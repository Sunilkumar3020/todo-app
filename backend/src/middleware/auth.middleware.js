import jwt from "jsonwebtoken"
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1]
    if (!token) res.status(401).json({ message: "No token" })

    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = decode;
        next()

    } catch (error) {
        res.status(401).json({ message: "Invalid token" })
    }
}

export default authMiddleware;