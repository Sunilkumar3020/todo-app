import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }
}, { timestamps: true })
const Todo = mongoose.model("Todo", todoSchema)
export default Todo;