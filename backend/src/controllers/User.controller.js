import User from "../models/User.model.js";


// Get all User
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find();
        if (!users) {
            return res.status(401).json({ status: "Failed", message: "User Not Found" })
        }
        res.status(200).json({ status: "success", data: users })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "failed", message: "server error" })
    }
}

// get single user

// update user

// delete user