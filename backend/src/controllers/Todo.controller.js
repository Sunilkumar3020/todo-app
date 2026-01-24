import Todo from "../models/Todo.model.js";

// create Todo

export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(404).json({ message: "Please enter title and description" })
        }

        const todo = await Todo.create({ title, description });

        if (!todo) {
            return res.status(401).json({ status: "failed", message: "Todo not created." })

        }

        res.status(201).json({ status: "success", data: todo })
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "failed", message: "Server Error" })
    }
}

// Get all todos

export const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({})
        if (!todos) {
            return res.status(404).json({ message: "Todo not found" })
        }
        res.status(200).json({ status: "success", data: todos })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Server Error" })
    }
}