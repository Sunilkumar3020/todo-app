import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register user

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!email) {
            return res.status(500).json({ message: 'Email is required' })
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({ name, email, password: hashedPassword, role })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN })

        if (!token) {
            return res.status(404).json({ status: "Failed", message: "Token not found" })
        }

        res.status(201).json({ status: "success", data: user, token })

    } catch (error) {
        console.error(error)
        res.status(500).json({ status: 'Failed', message: "Server Error" })
    }

}


// Login User

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).json({ message: "Please Enter email and password" })
        }

        const user = await User.findOne({ email }).select("+password")
        console.log(user)
        if (!user) {
            return res.status(401).json({ status: "Failed", message: "User not found" })
        }
        const passwordMatched = await bcrypt.compare(password, user.password);
        if (!passwordMatched) {
            return res.status(401).json({ message: "Invalid credentials" })
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES_IN })
        res.status(200).json({ status: "success", data: user, token })

    } catch (error) {
        console.error(error)
        res.status(500).json({ status: 'Failed', message: "Server Error" })
    }
}