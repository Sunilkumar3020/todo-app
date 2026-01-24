import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        trim: true,
        unique: [true, "Email Id must be unique"],
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
        trim: true,
        select: false,
        minlength: 10
    },
    active: {
        type: Boolean,
        default: true,
        select: false,
    },
    role: {
        type: String,
        default: "User",
        enum: ['User', "Admin"]
    }

}, { timestamps: true });
const User = mongoose.model("User", userSchema);

export default User;