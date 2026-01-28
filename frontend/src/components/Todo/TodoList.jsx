export default function TodoList({ taskList }) {
    return (
        <>
            {taskList.map(task => (
                <div key={task._id} className="flex mt-3 ">
                    <h2 className="mr-2">{task.title}</h2>
                    <p>{task.description}</p>
                </div>
            ))}
        </>
    )
}