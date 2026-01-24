import { useState } from "react"
import TodoList from "./TodoList"

export default function TodoForm() {
     const [task, setTask] = useState({
        title: "",
        description: ''
    })
    const [taskList, setTaskList] = useState([])
    const handleInputChange = e => {
         const { name, value } = e.target;
        setTask((prevTask) => ({
            ...prevTask,
            [name]: value
        }))


    }
    const handleFormSubmit = e => {
        e.preventDefault();

        setTaskList((prevList) => ([...prevList, task]))
        console.log(taskList)
        setTask({
            title: "",
            description: ''
        })
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="title" value={task.title} onChange={handleInputChange} placeholder="Task Title" />
                <input type="text" name="description" value={task.description} onChange={handleInputChange} placeholder="Description" />
                <button>Submit</button>
            </form>

            <TodoList taskList={taskList} />

        </>
    )
}