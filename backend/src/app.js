import express, { urlencoded } from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import todoRouter from './routes/todo.route.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello')
})


app.use("/api/v1/users", userRouter)
app.use('/api/v1/todos', todoRouter)

export default app;
